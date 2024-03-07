import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';

class AppkubeTopProductsPanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="top-products-panel">
        <div className="top-products-inner">
          <div className="top-products-heading">Top Products</div>
          <div className="errors-boxes">
            <div className="errors-box">
              <div className="product-details">
                <div className="icon">
                  <span>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHhSURBVHgBpVTdTcNgDDwnASFaiWxAmYAyQeGNvweYoGUCYIK2E8AGlA2CBIg3wgSEDcIGQSoSEm3MOU0gRBS14Ccn3+fz2b7Pgopt+uovvePAFawr0BDAt//0E/qxKp7SMcK7N4nLcVI423XddIGuYWE2Cwl6efsqg0+g3bp26fTwByPT3u1Q+rJb044ILvAPI7MjR2cvZaqxmpZDNjH+aSTzkPVor673+Duz8GYoW872kjbMsToJHc8BkPD+qcWaZIQTO09HOC90sU8ZpMABqa7z02cCv4h0BBHPnh0guB5KaP+MiOOhIzs1HfCgxTr7hSZmtf2aHqtQNorAY7MTTBR8sVfTLkcQjIGrNw9RmEhSDrTssoAmR93iZ0cL1QtexA5dD4/AVwll07xvTNiYQiwZj7AhRSbXxT2mX/7ZmISsDtmSyDFlW6NvXmXNJkfkwLL8Em5nYSo4tBgDsV5lzSbtFU7utPyimaDJKflk6acpfPqxN0IclO7Y2JffcWZlTaYmaGc0BQMCXlZXRNXykbcJcALrrWLw86OdgEbZ/gFe7Bf9FdtPPGtWG5+3JBNhTye7aG4jQJ/i7EmpJ8asjTkWWw4S5oDfLavfJZhQeMBqITpeTOx5sLRokas2qPTxA4Wl0ryj+lShAAAAAElFTkSuQmCC"
                      alt=""
                    />
                  </span>
                  <div className="percent">
                    <svg>
                      <circle cx="20" cy="20" r="18"></circle>
                      <circle cx="20" cy="20" r="18" style={{ '--percent': '15' } as React.CSSProperties}></circle>
                    </svg>
                  </div>
                </div>
                <div className="contents">
                  <div className="name">Product 1</div>
                  <strong>1965GB</strong>
                </div>
              </div>
              <div className="objects-details">
                <div className="name">Objects</div>
                <strong>19,265</strong>
              </div>
            </div>
            <div className="errors-box">
              <div className="product-details">
                <div className="icon">
                  <span>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHhSURBVHgBpVTdTcNgDDwnASFaiWxAmYAyQeGNvweYoGUCYIK2E8AGlA2CBIg3wgSEDcIGQSoSEm3MOU0gRBS14Ccn3+fz2b7Pgopt+uovvePAFawr0BDAt//0E/qxKp7SMcK7N4nLcVI423XddIGuYWE2Cwl6efsqg0+g3bp26fTwByPT3u1Q+rJb044ILvAPI7MjR2cvZaqxmpZDNjH+aSTzkPVor673+Duz8GYoW872kjbMsToJHc8BkPD+qcWaZIQTO09HOC90sU8ZpMABqa7z02cCv4h0BBHPnh0guB5KaP+MiOOhIzs1HfCgxTr7hSZmtf2aHqtQNorAY7MTTBR8sVfTLkcQjIGrNw9RmEhSDrTssoAmR93iZ0cL1QtexA5dD4/AVwll07xvTNiYQiwZj7AhRSbXxT2mX/7ZmISsDtmSyDFlW6NvXmXNJkfkwLL8Em5nYSo4tBgDsV5lzSbtFU7utPyimaDJKflk6acpfPqxN0IclO7Y2JffcWZlTaYmaGc0BQMCXlZXRNXykbcJcALrrWLw86OdgEbZ/gFe7Bf9FdtPPGtWG5+3JBNhTye7aG4jQJ/i7EmpJ8asjTkWWw4S5oDfLavfJZhQeMBqITpeTOx5sLRokas2qPTxA4Wl0ryj+lShAAAAAElFTkSuQmCC"
                      alt=""
                    />
                  </span>
                  <div className="percent">
                    <svg>
                      <circle cx="20" cy="20" r="18"></circle>
                      <circle cx="20" cy="20" r="18" style={{ '--percent': '15' } as React.CSSProperties}></circle>
                    </svg>
                  </div>
                </div>
                <div className="contents">
                  <div className="name">Product 2</div>
                  <strong>1652GB</strong>
                </div>
              </div>
              <div className="objects-details">
                <div className="name">Objects</div>
                <strong>19,265</strong>
              </div>
            </div>
            <div className="errors-box">
              <div className="product-details">
                <div className="icon">
                  <span>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHhSURBVHgBpVTdTcNgDDwnASFaiWxAmYAyQeGNvweYoGUCYIK2E8AGlA2CBIg3wgSEDcIGQSoSEm3MOU0gRBS14Ccn3+fz2b7Pgopt+uovvePAFawr0BDAt//0E/qxKp7SMcK7N4nLcVI423XddIGuYWE2Cwl6efsqg0+g3bp26fTwByPT3u1Q+rJb044ILvAPI7MjR2cvZaqxmpZDNjH+aSTzkPVor673+Duz8GYoW872kjbMsToJHc8BkPD+qcWaZIQTO09HOC90sU8ZpMABqa7z02cCv4h0BBHPnh0guB5KaP+MiOOhIzs1HfCgxTr7hSZmtf2aHqtQNorAY7MTTBR8sVfTLkcQjIGrNw9RmEhSDrTssoAmR93iZ0cL1QtexA5dD4/AVwll07xvTNiYQiwZj7AhRSbXxT2mX/7ZmISsDtmSyDFlW6NvXmXNJkfkwLL8Em5nYSo4tBgDsV5lzSbtFU7utPyimaDJKflk6acpfPqxN0IclO7Y2JffcWZlTaYmaGc0BQMCXlZXRNXykbcJcALrrWLw86OdgEbZ/gFe7Bf9FdtPPGtWG5+3JBNhTye7aG4jQJ/i7EmpJ8asjTkWWw4S5oDfLavfJZhQeMBqITpeTOx5sLRokas2qPTxA4Wl0ryj+lShAAAAAElFTkSuQmCC"
                      alt=""
                    />
                  </span>
                  <div className="percent">
                    <svg>
                      <circle cx="20" cy="20" r="18"></circle>
                      <circle cx="20" cy="20" r="18" style={{ '--percent': '15' } as React.CSSProperties}></circle>
                    </svg>
                  </div>
                </div>
                <div className="contents">
                  <div className="name">Product 3</div>
                  <strong>1265GB</strong>
                </div>
              </div>
              <div className="objects-details">
                <div className="name">Objects</div>
                <strong>19,265</strong>
              </div>
            </div>
            <div className="errors-box">
              <div className="product-details">
                <div className="icon">
                  <span>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHhSURBVHgBpVTdTcNgDDwnASFaiWxAmYAyQeGNvweYoGUCYIK2E8AGlA2CBIg3wgSEDcIGQSoSEm3MOU0gRBS14Ccn3+fz2b7Pgopt+uovvePAFawr0BDAt//0E/qxKp7SMcK7N4nLcVI423XddIGuYWE2Cwl6efsqg0+g3bp26fTwByPT3u1Q+rJb044ILvAPI7MjR2cvZaqxmpZDNjH+aSTzkPVor673+Duz8GYoW872kjbMsToJHc8BkPD+qcWaZIQTO09HOC90sU8ZpMABqa7z02cCv4h0BBHPnh0guB5KaP+MiOOhIzs1HfCgxTr7hSZmtf2aHqtQNorAY7MTTBR8sVfTLkcQjIGrNw9RmEhSDrTssoAmR93iZ0cL1QtexA5dD4/AVwll07xvTNiYQiwZj7AhRSbXxT2mX/7ZmISsDtmSyDFlW6NvXmXNJkfkwLL8Em5nYSo4tBgDsV5lzSbtFU7utPyimaDJKflk6acpfPqxN0IclO7Y2JffcWZlTaYmaGc0BQMCXlZXRNXykbcJcALrrWLw86OdgEbZ/gFe7Bf9FdtPPGtWG5+3JBNhTye7aG4jQJ/i7EmpJ8asjTkWWw4S5oDfLavfJZhQeMBqITpeTOx5sLRokas2qPTxA4Wl0ryj+lShAAAAAElFTkSuQmCC"
                      alt=""
                    />
                  </span>
                  <div className="percent">
                    <svg>
                      <circle cx="20" cy="20" r="18"></circle>
                      <circle cx="20" cy="20" r="18" style={{ '--percent': '15' } as React.CSSProperties}></circle>
                    </svg>
                  </div>
                </div>
                <div className="contents">
                  <div className="name">Product 4</div>
                  <strong>1265GB</strong>
                </div>
              </div>
              <div className="objects-details">
                <div className="name">Objects</div>
                <strong>19,265</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppkubeTopProductsPanel;
