/**
 * The table must show all packages and their status.
 */

import { packages } from "./data"
import "./styles.css"

const Packages = () => {
    return (
        <div>
            <h4>Packages</h4>
            <div className="table packages_table">
                <div className="table__row">
                    <p className="table__cell">id</p>
                    <p className="table__cell">status</p>
                </div>
                <div className="table__row">
                    <p className="table__cell">{packages[0].id}</p>
                    <p className="table__cell">{packages[0].status}</p>
                </div>
            </div>
        </div>
    )
}

export default Packages