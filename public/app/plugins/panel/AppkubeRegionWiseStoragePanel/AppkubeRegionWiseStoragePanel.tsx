import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';

class AppkubeRegionWiseStoragePanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="region-wise-storage-panel">
        <div className="region-wise-storage-container">
          <div className="title">Region wise Storage</div>
          <div className="country-wise-storage-container">
            <div className="progressbar-container">
              <div className="progress united"></div>
              <div className="country-details united">
                <span className="country-name">United States</span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAATCAYAAACUef2IAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACDSURBVHgB5ZTRDYAgDESvhkEczU3UTRzNTSokYuoZQhTwQ98P6YW80EIQGFR18EuPZ6wissRCSKwowIsPn0vsmXGPkQPnDzmhEtYlpe2nCKMIbcdW7o6AOXt0B4VYT4dGvC8ON2xvOVenJJcZc5arOfvQjP8ndvyEeANnuTpmzT+h6mw0NX3BP5g9/QAAAABJRU5ErkJggg=="
                  alt=""
                />
              </div>
              <div className="storage-gb">583 GB</div>
            </div>
            <div className="progressbar-container">
              <div className="progress china"></div>
              <div className="country-details china">
                <span className="country-name">China</span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAATCAYAAACUef2IAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE3SURBVHgBpVQBccMwDJR3A5Ax8BgMgsegDDYIgZAhaBm0Q7AyyBg0DJohaBl4r5u8yq7SOu3fKYpl+f2W4jgyEGNs4Fqqw8o5d6zKBPF7rEewOJxB6uF6GPsN7Gdif55/g42wV6geLYUB1sHWsIMo6en6yXql/Es4wr9iGWgirtmn+EtoRHWjYs+ZetntXnSJzxVH83CLQkEN+GQDlH6nwIORMJeUZM2QRaDyRTw3cBdvx05zOTwOlKsc6a9xc8AN9Gp8LD8Z3nV2Kbg3MT/tOgX3KUI3QpEyl3d6gj06a93GAMf149NskTJYxPL6lP07phQjtDQatZxSTDUTGLYS5mu+gm3i6cq39xDvJbxQsZBqeWn9o7FBp4aeH6jZNgX4dsl6X+RmOGuemVQ0tCZXK/6gelzN/QWkCPHizWNXogAAAABJRU5ErkJggg=="
                  alt=""
                />
              </div>
              <div className="storage-gb">423 GB</div>
            </div>
            <div className="progressbar-container">
              <div className="progress india"></div>
              <div className="country-details india">
                <span className="country-name">India</span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAYAAABCIB6VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACJSURBVHgB7ZXdDYAgDISvxkEczU3ETRzNTSoYSBqpTeTnwYTvBXKkBe4SIESYefXDgjpOIjrChERjRgN847vnrKztKGNTVY6gkGf9hE7M1qI/gEtzb5170zSy8JL5UpO6pmn15omhB/kt3NbhDY9zhsf/87jfIyTDiDs7VJDqqeb6FiG80h/D5AJkCqPpAMbvLgAAAABJRU5ErkJggg=="
                  alt=""
                />
              </div>
              <div className="storage-gb">346 GB</div>
            </div>
            <div className="progressbar-container">
              <div className="progress russia"></div>
              <div className="country-details russia">
                <span className="country-name">Russia</span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACjSURBVHgBxVNRDoAgCIXmQTpaN8lu0tG6CWnLzRAR9aO3NaMn8HooQgARbWFZYQwXIp4pwLcgwQRCQUzvjnEH9GEXv9IL6ISUt1Q2+vjAKHgnq2Jpn6vsPViiB73ww4fZ+M+U82lxJWBAzHetjoyqnYK9UKB52PI0500eCgV8XIU/KDtYeC3+5xz2xEMedits8arC3Csy3ggtRk3ZCKKHc34x3OJk91cq0SbNAAAAAElFTkSuQmCC"
                  alt=""
                />
              </div>
              <div className="storage-gb">331 GB</div>
            </div>
            <div className="progressbar-container">
              <div className="progress france"></div>
              <div className="country-details france">
                <span className="country-name">France</span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADTSURBVHgBrVTREYIwDE05/nWEjuAIjuAIuoEbIBMwgiM5AmzgCDW9S71eSJNSeHcBkjwer6HggCGEcMeThzYsThAMsAO90hthG4Z4KDp0CNiAdF+nEC4sf8Uo5eqTMjx53cp7JjYw/QlrJ1x9nCef6Wg5e+fOKBImqFxZvDhjfCj/Ylwz0o1qgTg+6/GZ/gVnup75iyCizzkrAUEwwSvL8YKA6NAlkrXvLF7qd4WmucdKHNFhTa2Ua9+yBXEfNjvkWDmU5lFbEx0ehejwAe1/aI7lBw8eTH5xM5WKAAAAAElFTkSuQmCC"
                  alt=""
                />
              </div>
              <div className="storage-gb">237 GB</div>
            </div>
            <div className="progressbar-container">
              <div className="progress australia"></div>
              <div className="country-details australia">
                <span className="country-name">Australia</span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAYAAABCIB6VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgB7ZNbDYQwEEXvbhCwEpCwEpCABCTgAFAADpCCFCQgYbglkEzKs4X+cZL7Udqe6RQAHBCRH/PHU1CWMDUzMII7cH/MFEwvFnBlbjVnOstlTlp6iXWrStaYa1BrvMQLHZOZ0++tgQtXNqniLZMigFhf11Rkq0MfcSbrF2yob4nVOLaLPCI+mvsiEK/4Fa+J+OmV+oE93uJozTL3OfspfImYCgEYAZVNRNVKCF1hAAAAAElFTkSuQmCC"
                  alt=""
                />
              </div>
              <div className="storage-gb">224 GB</div>
            </div>
            <div className="progressbar-container">
              <div className="progress spane"></div>
              <div className="country-details spane">
                <span className="country-name">Spane</span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACeSURBVHgB7ZPREUAwDEDDGcAIRjGKEYxQkxnFCEaI1gVRkZZy58O7y12btE8OAYgAEWsXkAqJetzob4kF0WhjuCw+ERkbpY2K1mGxJqJ644LWulgTsQfOeDlRDGxzELHLa4dCbRHPFF699RrxLxsIkKFmuIHrsIM3oPdgtFzMGV6QvuQuF3Mmh4f5henwSZH+xy6wP+SymHG6wvdHbwKdfFfYD/hf0wAAAABJRU5ErkJggg=="
                  alt=""
                />
              </div>
              <div className="storage-gb">124 GB</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppkubeRegionWiseStoragePanel;
