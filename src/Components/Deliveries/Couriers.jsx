/**
 * The table must show all couriers and their capacity.
 */

import { couriers } from "./data"
import "./styles.css"

const Couriers = () => {
    return (
        <div>
            <h4>Couriers</h4>
            <div className="table couriers_table">
                <div className="table__row">
                    <p className="table__cell">name</p>
                    <p className="table__cell">capacity</p>
                </div>
                <div className="table__row">
                    <p className="table__cell">{couriers[0].name}</p>
                    <p className="table__cell">{couriers[0].capacity}</p>
                </div>
            </div>
        </div>
    )
}

export default Couriers