import { cx } from '@emotion/css';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { NavModel, NavModelItem, TimeRange, PageLayoutType } from '@grafana/data';
// import { selectors } from '@grafana/e2e-selectors';
// import { config, locationService } from '@grafana/runtime';
// import { Themeable2, withTheme2 } from '@grafana/ui';
import { notifyApp } from 'app/core/actions';
import { Page } from 'app/core/components/Page/Page';
import { GrafanaContext, GrafanaContextType } from 'app/core/context/GrafanaContext';
// import { createErrorNotification } from 'app/core/copy/appNotification';
// import { getNavModel } from 'app/core/selectors/navModel';
import { PanelModel } from 'app/features/dashboard/state';
import { dashboardWatcher } from 'app/features/live/dashboard/dashboardWatcher';
// import { getPageNavFromSlug, getRootContentNavModel } from 'app/features/storage/StorageFolderPage';
import { DashboardRoutes, StoreState, DashboardInitPhase, DashboardInitError } from 'app/types';
import { PanelEditEnteredEvent, PanelEditExitedEvent } from 'app/types/events';

// import { DashNav } from '../dashboard/components/DashNav';
import { DashboardFailed } from '../dashboard/components/DashboardLoading/DashboardFailed';
import { DashboardLoading } from '../dashboard/components/DashboardLoading/DashboardLoading';
import { DashboardPrompt } from '../dashboard/components/DashboardPrompt/DashboardPrompt';
// import { DashboardSettings } from '../dashboard/components/DashboardSettings';
// import { PanelInspector } from '../dashboard/components/Inspector/PanelInspector';
// import { PanelEditor } from '../dashboard/components/PanelEditor/PanelEditor';
import { PublicDashboardFooter } from '../dashboard/components/PublicDashboardFooter/PublicDashboardsFooter';
// import { SubMenu } from '../dashboard/components/SubMenu/SubMenu';
import { DashboardGrid } from '../dashboard/dashgrid/DashboardGrid';
import { liveTimer } from '../dashboard/dashgrid/liveTimer';
import { getTimeSrv } from '../dashboard/services/TimeSrv';
// import { findTemplateVarChanges } from '../variables/utils';
import { DashboardModel } from '../dashboard/state/DashboardModel';
import { cleanUpDashboardAndVariables } from '../dashboard/state/actions';
import { initDashboard, InitDashboardArgs } from '../dashboard/state/initDashboard';
import { cancelVariables, templateVarsChangedInUrl } from '../variables/state/actions';

interface Props {
    uid?: string;
    type?: string;
    slug?: string;
    accessToken?: string;
    tab?: string;
    folderId?: string;
    editPanel?: string;
    viewPanel?: string;
    editview?: string;
    shareView?: string;
    panelType?: string;
    inspect?: string;
    from?: string;
    to?: string;
    refresh?: string;
    kiosk?: string | true;
    isPublic?: boolean;
    /* @ts-ignore */
    dashboard: DashboardModel | null;
    initPhase: DashboardInitPhase;
    initError: DashboardInitError | null;
    initDashboard: (args: InitDashboardArgs) => void;
}

interface State {
    editPanel: PanelModel | null;
    viewPanel: PanelModel | null;
    updateScrollTop?: number;
    rememberScrollTop?: number;
    showLoadingState: boolean;
    panelNotFound: boolean;
    editPanelAccessDenied: boolean;
    scrollElement?: HTMLDivElement;
    pageNav?: NavModelItem;
    sectionNav?: NavModel;
}

export class CustomDashboardLoader extends PureComponent<Props, State> {
    declare context: GrafanaContextType;
    static contextType = GrafanaContext;

    state: State = this.getCleanState();

    getCleanState(): State {
        return {
            editPanel: null,
            viewPanel: null,
            showLoadingState: false,
            panelNotFound: false,
            editPanelAccessDenied: false,
        };
    }

    componentDidMount() {
        this.initDashboard();
    }

    componentWillUnmount() {
        this.closeDashboard();
    }

    closeDashboard() {
        // this.props.cleanUpDashboardAndVariables();
        this.setState(this.getCleanState());
    }

    initDashboard() {
        const { slug, uid, type, folderId, panelType } = this.props;

        this.props.initDashboard({
            urlSlug: slug,
            urlUid: uid,
            urlType: type,
            urlFolderId: folderId,
            panelType: panelType,
            fixUrl: false,
            keybindingSrv: this.context.keybindings,
            routeName: DashboardRoutes.Normal
        });

        // small delay to start live updates
        setTimeout(this.updateLiveTimer, 250);
    }

    componentDidUpdate(prevProps: Props, prevState: State) {
        const { dashboard, from, to, refresh } = this.props;

        if (!dashboard) {
            return;
        }

        if (prevProps.uid !== this.props.uid) {
            this.initDashboard();
            return;
        }

        if (prevProps?.from !== from || prevProps?.to !== to) {
            getTimeSrv().updateTimeRangeFromUrl();
            this.updateLiveTimer();
        }

        if (!prevProps.refresh && refresh) {
            getTimeSrv().setAutoRefresh(refresh);
        }

        // if (prevProps.location.search !== this.props.location.search) {
        //     const prevUrlParams = prevProps.queryParams;
        //     const urlParams = this.props.queryParams;

        //     if (urlParams?.from !== prevUrlParams?.from || urlParams?.to !== prevUrlParams?.to) {
        //         getTimeSrv().updateTimeRangeFromUrl();
        //         this.updateLiveTimer();
        //     }

        //     if (!prevUrlParams?.refresh && urlParams?.refresh) {
        //         getTimeSrv().setAutoRefresh(urlParams.refresh);
        //     }

        //     const templateVarChanges = findTemplateVarChanges(this.props.queryParams, prevProps.queryParams);

        //     if (templateVarChanges) {
        //         templateVarsChangedInUrl(dashboard.uid, templateVarChanges);
        //     }
        // }

        // entering edit mode
        if (this.state.editPanel && !prevState.editPanel) {
            dashboardWatcher.setEditingState(true);

            // Some panels need to be notified when entering edit mode
            this.props.dashboard?.events.publish(new PanelEditEnteredEvent(this.state.editPanel.id));
        }

        // leaving edit mode
        if (!this.state.editPanel && prevState.editPanel) {
            dashboardWatcher.setEditingState(false);

            // Some panels need kicked when leaving edit mode
            this.props.dashboard?.events.publish(new PanelEditExitedEvent(prevState.editPanel.id));
        }

        // if (this.state.editPanelAccessDenied) {
        //     this.props.notifyApp(createErrorNotification('Permission to edit panel denied'));
        //     locationService.partial({ editPanel: null });
        // }

        // if (this.state.panelNotFound) {
        //     this.props.notifyApp(createErrorNotification(`Panel not found`));
        //     locationService.partial({ editPanel: null, viewPanel: null });
        // }
    }

    updateLiveTimer = () => {
        let tr: TimeRange | undefined = undefined;
        if (this.props.dashboard?.liveNow) {
            tr = getTimeSrv().timeRange();
        }
        liveTimer.setLiveTimeRange(tr);
    };

    // static getDerivedStateFromProps(props: Props, state: State) {
    //     const { dashboard, editPanel, viewPanel } = props;

    //     if (!dashboard) {
    //         return state;
    //     }

    //     const updatedState = { ...state };

    //     // Entering edit mode
    //     if (!state.editPanel && editPanel) {
    //         const panel = dashboard.getPanelByUrlId(editPanel);
    //         if (panel) {
    //             if (dashboard.canEditPanel(panel)) {
    //                 updatedState.editPanel = panel;
    //                 updatedState.rememberScrollTop = state.scrollElement?.scrollTop;
    //             } else {
    //                 updatedState.editPanelAccessDenied = true;
    //             }
    //         } else {
    //             updatedState.panelNotFound = true;
    //         }
    //     }
    //     // Leaving edit mode
    //     else if (state.editPanel && !editPanel) {
    //         updatedState.editPanel = null;
    //         updatedState.updateScrollTop = state.rememberScrollTop;
    //     }

    //     // Entering view mode
    //     if (!state.viewPanel && viewPanel) {
    //         const panel = dashboard.getPanelByUrlId(viewPanel);
    //         if (panel) {
    //             // This mutable state feels wrong to have in getDerivedStateFromProps
    //             // Should move this state out of dashboard in the future
    //             dashboard.initViewPanel(panel);
    //             updatedState.viewPanel = panel;
    //             updatedState.rememberScrollTop = state.scrollElement?.scrollTop;
    //             updatedState.updateScrollTop = 0;
    //         } else {
    //             updatedState.panelNotFound = true;
    //         }
    //     }
    //     // Leaving view mode
    //     else if (state.viewPanel && !viewPanel) {
    //         // This mutable state feels wrong to have in getDerivedStateFromProps
    //         // Should move this state out of dashboard in the future
    //         dashboard.exitViewPanel(state.viewPanel);
    //         updatedState.viewPanel = null;
    //         updatedState.updateScrollTop = state.rememberScrollTop;
    //     }

    //     // if we removed url edit state, clear any panel not found state
    //     if (state.panelNotFound || (state.editPanelAccessDenied && !editPanel)) {
    //         updatedState.panelNotFound = false;
    //         updatedState.editPanelAccessDenied = false;
    //     }

    //     return updateStatePageNavFromProps(props, updatedState);
    // }

    onAddPanel = () => {
        const { dashboard } = this.props;

        if (!dashboard) {
            return;
        }

        // Return if the "Add panel" exists already
        if (dashboard.panels.length > 0 && dashboard.panels[0].type === 'add-panel') {
            return;
        }

        // Move all panels down by the height of the "add panel" widget.
        // This is to work around an issue with react-grid-layout that can mess up the layout
        // in certain configurations. (See https://github.com/react-grid-layout/react-grid-layout/issues/1787)
        const addPanelWidgetHeight = 8;
        for (const panel of dashboard.panelIterator()) {
            panel.gridPos.y += addPanelWidgetHeight;
        }

        dashboard.addPanel({
            type: 'add-panel',
            gridPos: { x: 0, y: 0, w: 12, h: addPanelWidgetHeight },
            title: 'Panel Title',
        });

        // scroll to top after adding panel
        this.setState({ updateScrollTop: 0 });
    };

    setScrollRef = (scrollElement: HTMLDivElement): void => {
        this.setState({ scrollElement });
    };

    getInspectPanel() {
        // const { dashboard, queryParams } = this.props;

        // const inspectPanelId = queryParams.inspect;

        // if (!dashboard || !inspectPanelId) {
        //     return null;
        // }

        // const inspectPanel = dashboard.getPanelById(parseInt(inspectPanelId, 10));

        // // cannot inspect panels plugin is not already loaded
        // if (!inspectPanel) {
        //     return null;
        // }

        // return inspectPanel;
        return null;
    }

    render() {
        const { dashboard, initError, isPublic } = this.props;
        const { editPanel, viewPanel, updateScrollTop, pageNav, sectionNav } = this.state;
        // const kioskMode = KioskMode.Full;

        if (!dashboard) {
            return <DashboardLoading initPhase={this.props.initPhase} />;
        }
        const pageClassName = cx({
            'panel-in-fullscreen': false,
            'page-hidden': false,
        });

        return (
            <>
                <Page
                    navModel={sectionNav}
                    pageNav={pageNav}
                    layout={PageLayoutType.Canvas}
                    toolbar={null}
                    className={pageClassName}
                    scrollRef={this.setScrollRef}
                    scrollTop={updateScrollTop}
                >
                    <DashboardPrompt dashboard={dashboard} />

                    {initError && <DashboardFailed />}
                    {/* {showSubMenu && (
                        <section aria-label={selectors.pages.Dashboard.SubMenu.submenu}>
                            <SubMenu dashboard={dashboard} annotations={dashboard.annotations.list} links={dashboard.links} />
                        </section>
                    )} */}

                    <DashboardGrid
                        dashboard={dashboard}
                        isEditable={!!dashboard.meta.canEdit}
                        viewPanel={viewPanel}
                        editPanel={editPanel}
                    />

                    {/* {inspectPanel && <PanelInspector dashboard={dashboard} panel={inspectPanel} />} */}
                </Page>
                {/* {editPanel && (
                    <PanelEditor
                        dashboard={dashboard}
                        sourcePanel={editPanel}
                        tab={this.props.queryParams.tab}
                        sectionNav={sectionNav}
                        pageNav={pageNav}
                    />
                )} */}
                {/* {queryParams.editview && (
                    <DashboardSettings
                        dashboard={dashboard}
                        editview={queryParams.editview}
                        pageNav={pageNav}
                        sectionNav={sectionNav}
                    />
                )} */}
                {
                    // TODO: assess if there are other places where we may want a footer, which may reveal a better place to add this
                    isPublic && <PublicDashboardFooter />
                }
            </>
        );
    }
}

// function updateStatePageNavFromProps(props: Props, state: State): State {
//     const { dashboard } = props;

//     if (!dashboard) {
//         return state;
//     }

//     let pageNav = state.pageNav;
//     let sectionNav = state.sectionNav;

//     // if (!pageNav || dashboard.title !== pageNav.text) {
//     //     pageNav = {
//     //         text: dashboard.title,
//     //         url: locationUtil.getUrlForPartial(props.history.location, {
//     //             editview: null,
//     //             editPanel: null,
//     //             viewPanel: null,
//     //         }),
//     //     };
//     // }

//     // Check if folder changed
//     const { folderTitle, folderUid } = dashboard.meta;
//     if (folderTitle && folderUid && pageNav && pageNav.parentItem?.text !== folderTitle) {
//         pageNav = {
//             ...pageNav,
//             parentItem: {
//                 text: folderTitle,
//                 url: `/dashboards/f/${dashboard.meta.folderUid}`,
//             },
//         };
//     }

//     // if (props.route.routeName === DashboardRoutes.Path) {
//     //     sectionNav = getRootContentNavModel();
//     //     const pageNav = getPageNavFromSlug(props.match.params.slug!);
//     //     if (pageNav?.parentItem) {
//     //         pageNav.parentItem = pageNav.parentItem;
//     //     }
//     // } else {
//     //     sectionNav = getNavModel(props.navIndex, config.featureToggles.topnav ? 'dashboards/browse' : 'dashboards');
//     // }

//     if (state.editPanel || state.viewPanel) {
//         pageNav = {
//             ...pageNav,
//             text: `${state.editPanel ? 'Edit' : 'View'} panel`,
//             parentItem: pageNav,
//             url: undefined,
//         };
//     }

//     if (state.pageNav === pageNav && state.sectionNav === sectionNav) {
//         return state;
//     }

//     return {
//         ...state,
//         pageNav,
//         sectionNav,
//     };
// }

export const mapStateToProps = (state: StoreState) => ({
    initPhase: state.dashboard.initPhase,
    initError: state.dashboard.initError,
    dashboard: state.dashboard.getModel(),
    navIndex: state.navIndex,
});

const mapDispatchToProps = {
    initDashboard,
    cleanUpDashboardAndVariables,
    notifyApp,
    cancelVariables,
    templateVarsChangedInUrl,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(CustomDashboardLoader);
