import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';
import './css/style.css';

class AppkubeErrorOnRequestPanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="error-request-panel">
        <div className="error-request-inner">
          <div className="error-request-header">
            <span className="error-request-title">Errors in Request</span>
            <div className="error-request-percentage">
              <div className="error-info">
                <span className="dot-icon four"></span>
                <span className="name">4xx Errors</span>
              </div>
              <div className="error-info">
                <span className="dot-icon five"></span>
                <span className="name">5xx Errors</span>
              </div>
            </div>
          </div>
          <div className="error-request-boxes">
            <div className="error-request-row">
              <div className="error-request-box">
                <div className="icon">
                  <span>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAANCAYAAACdKY9CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADUSURBVHgBvVDBDYJAEJy9E/zSgdABdiClUAH48WFiwksTY6Id2IIl2AGUQAk8FYFzTz0MQuJLN7m7md2d3dsFfm2kr/VCpfz4X3Kz5Zam4qVyGgsuO0gphKWAp7E5xJzTHJ0rBmtdurS6vbv3BESILAszwzexcqXEvm4Qaj76FJQlguRARVt9BFcq5KsdnQc7jG2kvITY8LpCxkP6xtcTVDXmPPTJcN2NFxEwjDpfUld4SazIEpigQsG4LdIoOJKe+CHgCrkUOEqbg8x1UOOOcQ7+YncFI0H4fRk3IQAAAABJRU5ErkJggg=="
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
                  <div className="name">Put Request Errors</div>
                  <strong>982</strong>
                </div>
              </div>
              <div className="error-request-box">
                <div className="icon">
                  <span>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAANCAYAAACdKY9CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADUSURBVHgBvVDBDYJAEJy9E/zSgdABdiClUAH48WFiwksTY6Id2IIl2AGUQAk8FYFzTz0MQuJLN7m7md2d3dsFfm2kr/VCpfz4X3Kz5Zam4qVyGgsuO0gphKWAp7E5xJzTHJ0rBmtdurS6vbv3BESILAszwzexcqXEvm4Qaj76FJQlguRARVt9BFcq5KsdnQc7jG2kvITY8LpCxkP6xtcTVDXmPPTJcN2NFxEwjDpfUld4SazIEpigQsG4LdIoOJKe+CHgCrkUOEqbg8x1UOOOcQ7+YncFI0H4fRk3IQAAAABJRU5ErkJggg=="
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
                  <div className="name">Post Request Errors</div>
                  <strong>1,142</strong>
                </div>
              </div>
            </div>
            <div className="error-request-row">
              <div className="error-request-box">
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
                  <div className="name">Get Request Errors</div>
                  <strong>1,232</strong>
                </div>
              </div>
              <div className="error-request-box">
                <div className="icon">
                  <span>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAANCAYAAACdKY9CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADUSURBVHgBvVDBDYJAEJy9E/zSgdABdiClUAH48WFiwksTY6Id2IIl2AGUQAk8FYFzTz0MQuJLN7m7md2d3dsFfm2kr/VCpfz4X3Kz5Zam4qVyGgsuO0gphKWAp7E5xJzTHJ0rBmtdurS6vbv3BESILAszwzexcqXEvm4Qaj76FJQlguRARVt9BFcq5KsdnQc7jG2kvITY8LpCxkP6xtcTVDXmPPTJcN2NFxEwjDpfUld4SazIEpigQsG4LdIoOJKe+CHgCrkUOEqbg8x1UOOOcQ7+YncFI0H4fRk3IQAAAABJRU5ErkJggg=="
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
                  <div className="name">Delete Request Errors</div>
                  <strong>1,423</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppkubeErrorOnRequestPanel;
