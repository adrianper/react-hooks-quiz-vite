/**
 * When the user clicks on the button "Set deliveries" the packages must be assigned to the couriers.
 * The packages must be assigned to the couriers based on their capacity prioritizing couriers with higher capacity.
 * All couriers must have at least one package assigned.
 */

import Couriers from "./Couriers"
import Packages from "./Packages"
import DeliveriesTable from "./Deliveries"

const Deliveries = () => {
    return (
        <div className="deliveries">
            <h1>Deliveries</h1>
            <div>
                <button type="button">Set deliveries</button>
            </div>
            <div style={{ display: "grid", gridAutoFlow: "column", gap: "2rem" }}>
                <Couriers />
                <Packages />
            </div>
            <DeliveriesTable />
        </div>
    )
}

export default Deliveries