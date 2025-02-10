/**
 * The table must show all courier deliveries and their status.
 * When the user clicks ✅ the status of the package must change to "delivered".
 */

import { couriers } from "./data"
import "./styles.css"

const Deliveries = () => {
    const deliveries = couriers

    return (
        <div>
            <h4>Courier deliveries</h4>
            <div className="table deliveries_table">
                <div className="table__row">
                    <p className="table__cell">Courier</p>
                    <p className="table__cell">Package</p>
                    <p className="table__cell">Status</p>
                    <p className="table__cell">.</p>
                </div>
                <div className="table__row">
                    <p className="table__cell">{deliveries[0].name}</p>
                    <p className="table__cell">{deliveries[0].packages[0]?.id || "-"}</p>
                    <p className="table__cell">{deliveries[0].packages[0]?.status || "-"}</p>
                    <span>✅</span>
                </div>
            </div>
        </div>
    )
}

export default Deliveries