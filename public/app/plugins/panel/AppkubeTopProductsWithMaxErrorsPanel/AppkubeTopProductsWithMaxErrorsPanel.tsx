import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import './css/style.css';

class AppkubeTopProductsWithMaxErrorsPanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="top-products-errors-panel">
        <div className="top-products-errors-inner">
          <div className="top-products-errors-heading">Top Products With Max Errors</div>
          <div className="errors-boxes">
            <div className="errors-box">
              <div className="icon">
                <span>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIlSURBVHgB7VXbTeNAFD0Te1erTSTcwWYrwFRA+OP1ARUQKgAqSKgAOiB0YCRA/GEqIFSAqQAjBQmJxMO5TozCzORlfjlf45n7OPf6zFzgByWhZhms/9F1eGh4CssaqNMhkH2uU64TrfGQDRDfvKmkVKL1mm54QIvLBuZDzKTn16+qM3eizZpu8aCNEmCl7eueOp6ZaLOqm0rhDN8AK9s3K6tYRvO3aiLIftXcsxKxmgTfBMneWXFdhls1fYvylcVXPbVmbloViZzFUPpMagnmR0r7I/FtBDowD20x1PRp1sdpcS+2KfMM2KHhMj8DEvgMUlHo8uyJbKPLnooLohUfTSqvjWnYqOrOVlU/ivqwILar+oBtf6a/pVrf3KAYUgxfgDM6tFhzNAAu3nx041Sl47bCXv1CWNG5ypq6eDUUXqy45oY4ez7uAVh9zoOM/hsJ1eFGOuhjxXySnKrLk3m4xeRgbpAEq9rlZe2aR5bq5N8Im6tX9V+URyaRsJwSXs7iTGFXfCSJ/CvTyKpIxMC2LFF5R+Plk0BIlQX0CLIMAdeJ30cSjdmIrP++40SCMun+eFzfRZGGO2xdSKl3mPBcErraUWAk6T3Vx6EQYQs7jphf4XxUpfe8M/n8wVBRXC/JfOJZaArD9ag6xcBL2tbDWbQwGPD40nFZJw6+UWV7WGDwjZLEcBOYjrz/HOW0DCnRf8WlpGMqzw9b1/3NUR7NGOU/KI0PHWHeJHjAX08AAAAASUVORK5CYII="
                    alt=""
                  />
                </span>
                <div className="percent">
                  <svg>
                    <circle cx="28" cy="28" r="26"></circle>
                    <circle cx="28" cy="28" r="26" style={{ '--percent': '15' } as React.CSSProperties}></circle>
                  </svg>
                </div>
              </div>
              <div className="contents">
                <div className="name">Product 1 Errors</div>
                <div className="price">
                  <strong>1562</strong>
                  <span>10%</span>
                </div>
              </div>
            </div>
            <div className="errors-box">
              <div className="icon">
                <span>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIlSURBVHgB7VXbTeNAFD0Te1erTSTcwWYrwFRA+OP1ARUQKgAqSKgAOiB0YCRA/GEqIFSAqQAjBQmJxMO5TozCzORlfjlf45n7OPf6zFzgByWhZhms/9F1eGh4CssaqNMhkH2uU64TrfGQDRDfvKmkVKL1mm54QIvLBuZDzKTn16+qM3eizZpu8aCNEmCl7eueOp6ZaLOqm0rhDN8AK9s3K6tYRvO3aiLIftXcsxKxmgTfBMneWXFdhls1fYvylcVXPbVmbloViZzFUPpMagnmR0r7I/FtBDowD20x1PRp1sdpcS+2KfMM2KHhMj8DEvgMUlHo8uyJbKPLnooLohUfTSqvjWnYqOrOVlU/ivqwILar+oBtf6a/pVrf3KAYUgxfgDM6tFhzNAAu3nx041Sl47bCXv1CWNG5ypq6eDUUXqy45oY4ez7uAVh9zoOM/hsJ1eFGOuhjxXySnKrLk3m4xeRgbpAEq9rlZe2aR5bq5N8Im6tX9V+URyaRsJwSXs7iTGFXfCSJ/CvTyKpIxMC2LFF5R+Plk0BIlQX0CLIMAdeJ30cSjdmIrP++40SCMun+eFzfRZGGO2xdSKl3mPBcErraUWAk6T3Vx6EQYQs7jphf4XxUpfe8M/n8wVBRXC/JfOJZaArD9ag6xcBL2tbDWbQwGPD40nFZJw6+UWV7WGDwjZLEcBOYjrz/HOW0DCnRf8WlpGMqzw9b1/3NUR7NGOU/KI0PHWHeJHjAX08AAAAASUVORK5CYII="
                    alt=""
                  />
                </span>
                <div className="percent">
                  <svg>
                    <circle cx="28" cy="28" r="26"></circle>
                    <circle cx="28" cy="28" r="26" style={{ '--percent': '20' } as React.CSSProperties}></circle>
                  </svg>
                </div>
              </div>
              <div className="contents">
                <div className="name">Product 2 Errors</div>
                <div className="price">
                  <strong>1562</strong>
                  <span>10%</span>
                </div>
              </div>
            </div>
            <div className="errors-box">
              <div className="icon">
                <span>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIlSURBVHgB7VXbTeNAFD0Te1erTSTcwWYrwFRA+OP1ARUQKgAqSKgAOiB0YCRA/GEqIFSAqQAjBQmJxMO5TozCzORlfjlf45n7OPf6zFzgByWhZhms/9F1eGh4CssaqNMhkH2uU64TrfGQDRDfvKmkVKL1mm54QIvLBuZDzKTn16+qM3eizZpu8aCNEmCl7eueOp6ZaLOqm0rhDN8AK9s3K6tYRvO3aiLIftXcsxKxmgTfBMneWXFdhls1fYvylcVXPbVmbloViZzFUPpMagnmR0r7I/FtBDowD20x1PRp1sdpcS+2KfMM2KHhMj8DEvgMUlHo8uyJbKPLnooLohUfTSqvjWnYqOrOVlU/ivqwILar+oBtf6a/pVrf3KAYUgxfgDM6tFhzNAAu3nx041Sl47bCXv1CWNG5ypq6eDUUXqy45oY4ez7uAVh9zoOM/hsJ1eFGOuhjxXySnKrLk3m4xeRgbpAEq9rlZe2aR5bq5N8Im6tX9V+URyaRsJwSXs7iTGFXfCSJ/CvTyKpIxMC2LFF5R+Plk0BIlQX0CLIMAdeJ30cSjdmIrP++40SCMun+eFzfRZGGO2xdSKl3mPBcErraUWAk6T3Vx6EQYQs7jphf4XxUpfe8M/n8wVBRXC/JfOJZaArD9ag6xcBL2tbDWbQwGPD40nFZJw6+UWV7WGDwjZLEcBOYjrz/HOW0DCnRf8WlpGMqzw9b1/3NUR7NGOU/KI0PHWHeJHjAX08AAAAASUVORK5CYII="
                    alt=""
                  />
                </span>
                <div className="percent">
                  <svg>
                    <circle cx="28" cy="28" r="26"></circle>
                    <circle cx="28" cy="28" r="26" style={{ '--percent': '8' } as React.CSSProperties}></circle>
                  </svg>
                </div>
              </div>
              <div className="contents">
                <div className="name">Product 3 Errors</div>
                <div className="price">
                  <strong>1562</strong>
                  <span>10%</span>
                </div>
              </div>
            </div>
            <div className="errors-box">
              <div className="icon">
                <span>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIlSURBVHgB7VXbTeNAFD0Te1erTSTcwWYrwFRA+OP1ARUQKgAqSKgAOiB0YCRA/GEqIFSAqQAjBQmJxMO5TozCzORlfjlf45n7OPf6zFzgByWhZhms/9F1eGh4CssaqNMhkH2uU64TrfGQDRDfvKmkVKL1mm54QIvLBuZDzKTn16+qM3eizZpu8aCNEmCl7eueOp6ZaLOqm0rhDN8AK9s3K6tYRvO3aiLIftXcsxKxmgTfBMneWXFdhls1fYvylcVXPbVmbloViZzFUPpMagnmR0r7I/FtBDowD20x1PRp1sdpcS+2KfMM2KHhMj8DEvgMUlHo8uyJbKPLnooLohUfTSqvjWnYqOrOVlU/ivqwILar+oBtf6a/pVrf3KAYUgxfgDM6tFhzNAAu3nx041Sl47bCXv1CWNG5ypq6eDUUXqy45oY4ez7uAVh9zoOM/hsJ1eFGOuhjxXySnKrLk3m4xeRgbpAEq9rlZe2aR5bq5N8Im6tX9V+URyaRsJwSXs7iTGFXfCSJ/CvTyKpIxMC2LFF5R+Plk0BIlQX0CLIMAdeJ30cSjdmIrP++40SCMun+eFzfRZGGO2xdSKl3mPBcErraUWAk6T3Vx6EQYQs7jphf4XxUpfe8M/n8wVBRXC/JfOJZaArD9ag6xcBL2tbDWbQwGPD40nFZJw6+UWV7WGDwjZLEcBOYjrz/HOW0DCnRf8WlpGMqzw9b1/3NUR7NGOU/KI0PHWHeJHjAX08AAAAASUVORK5CYII="
                    alt=""
                  />
                </span>
                <div className="percent">
                  <svg>
                    <circle cx="28" cy="28" r="26"></circle>
                    <circle cx="28" cy="28" r="26" style={{ '--percent': '7' } as React.CSSProperties}></circle>
                  </svg>
                </div>
              </div>
              <div className="contents">
                <div className="name">Product 4 Errors</div>
                <div className="price">
                  <strong>1562</strong>
                  <span>10%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppkubeTopProductsWithMaxErrorsPanel;
