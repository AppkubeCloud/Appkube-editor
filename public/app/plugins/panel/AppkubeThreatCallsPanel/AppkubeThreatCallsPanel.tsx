import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';

class AppkubeThreatCallsPanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="threat-calls-panel">
        <div className="threat-calls-inner">
          <div className="threat-calls-heading">Threat Calls</div>
          <div className="threat-calls-boxes">
            <div className="threat-calls-row">
              <div className="threat-calls-box">
                <div className="icon">
                  <span>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAANCAYAAACdKY9CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADPSURBVHgBtVDBDYJAEJxFwC92IB1gB9iBHSgdSIw89EmCiT6MFVCCsRLpQO3AL0RY94gPxSP4cR53l525md0F/g1SRxLxWS6vQ5uttjQyXr+cysJQClQUGKBCyIxAvVWNDLgic5TWbNrYNlIi3MEg28JUSuN33tBE+3mOUJxnEu03SVPz4dS3cEyWDGnr0CS/EpQzE27S93W9o/kvCZChM4Ye9Vo3EV9EkBHLsBpIotqQJ+lunfAoEfZ6SCsgbHHdl0DwUYwXPEEL4qid68QTzFY6US3oaOgAAAAASUVORK5CYII="
                      alt=""
                    />
                    <p>
                      {'23'}
                      <sub>%</sub>
                    </p>
                  </span>
                  <div className="percent purple">
                    <svg>
                      <circle cx="28" cy="28" r="26"></circle>
                      <circle cx="28" cy="28" r="26" style={{ '--percent': '5' } as React.CSSProperties}></circle>
                    </svg>
                  </div>
                </div>
                <div className="contents">
                  <div className="name">Development</div>
                  <div className="price up">
                    <strong>5,123</strong>
                    <span>30%</span>
                  </div>
                </div>
              </div>
              <div className="threat-calls-box">
                <div className="icon">
                  <span>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAANCAYAAACdKY9CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACaSURBVHgBnVHBDYMwDDwHyBqlk9BO0BU6Qj/to/3wKhIvRmATYBKYI4gYIgRCEUQK94hs6+4c24AnyDzZi2Mt8XQRe4UyLagTJtERbsRIHK6PaOKYOFyKTGh+OaV7gv+H4yUW8ES449Zu829OV6dAKdzh00FKVFbJ3cH+go3zQ5tdZ2++HPASBupVIALUephucWTLaPpgFnhjBJamJI7lJUq0AAAAAElFTkSuQmCC"
                      alt=""
                    />
                    <p>
                      {'89'}
                      <sub>%</sub>
                    </p>
                  </span>
                  <div className="percent red">
                    <svg>
                      <circle cx="28" cy="28" r="26"></circle>
                      <circle cx="28" cy="28" r="26" style={{ '--percent': '10' } as React.CSSProperties}></circle>
                    </svg>
                  </div>
                </div>
                <div className="contents">
                  <div className="name">Test</div>
                  <div className="price down">
                    <strong>61,892</strong>
                    <span>10%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="threat-calls-row">
              <div className="threat-calls-box">
                <div className="icon">
                  <span>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAANCAYAAACdKY9CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADUSURBVHgBvVDBDYJAEJy9E/zSgdABdiClUAH48WFiwksTY6Id2IIl2AGUQAk8FYFzTz0MQuJLN7m7md2d3dsFfm2kr/VCpfz4X3Kz5Zam4qVyGgsuO0gphKWAp7E5xJzTHJ0rBmtdurS6vbv3BESILAszwzexcqXEvm4Qaj76FJQlguRARVt9BFcq5KsdnQc7jG2kvITY8LpCxkP6xtcTVDXmPPTJcN2NFxEwjDpfUld4SazIEpigQsG4LdIoOJKe+CHgCrkUOEqbg8x1UOOOcQ7+YncFI0H4fRk3IQAAAABJRU5ErkJggg=="
                      alt=""
                    />
                    <p>
                      {'95'}
                      <sub>%</sub>
                    </p>
                  </span>
                  <div className="percent rich-red">
                    <svg>
                      <circle cx="28" cy="28" r="26"></circle>
                      <circle cx="28" cy="28" r="26" style={{ '--percent': '15' } as React.CSSProperties}></circle>
                    </svg>
                  </div>
                </div>
                <div className="contents">
                  <div className="name">Stage</div>
                  <div className="price up">
                    <strong>95,123</strong>
                    <span>30%</span>
                  </div>
                </div>
              </div>
              <div className="threat-calls-box">
                <div className="icon">
                  <span>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAANCAYAAACdKY9CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACASURBVHgBtVDBDUBAEJxZClGCEnRCEeIjQiI+NEMnSlCCAsRxcrzEIUyyd8nM7OxmgS9QJarQdabJGUkg13W74QquzVDGKhBBAIU2bdhbJ2izWc8/JugUlwgnostqtpcB20N4iojEpFgbnuDdleYZo+Ng4PobftgNGyerxkP7GQt4bR8aSwDNJQAAAABJRU5ErkJggg=="
                      alt=""
                    />
                    <p>
                      {'55'}
                      <sub>%</sub>
                    </p>
                  </span>
                  <div className="percent electirc-green">
                    <svg>
                      <circle cx="28" cy="28" r="26"></circle>
                      <circle cx="28" cy="28" r="26" style={{ '--percent': '15' } as React.CSSProperties}></circle>
                    </svg>
                  </div>
                </div>
                <div className="contents">
                  <div className="name">Production</div>
                  <div className="price down">
                    <strong>53,591</strong>
                    <span>10%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppkubeThreatCallsPanel;
