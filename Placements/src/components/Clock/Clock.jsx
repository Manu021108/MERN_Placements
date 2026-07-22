import { useEffect, useState } from "react";

function Clock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {

        const timer = setInterval(() => {

            setTime(new Date());

        }, 1000);

        return () => {

            clearInterval(timer);

        };

    }, []);

    return (

        <div>

            <h3>Current Time</h3>

            <h2>{time.toLocaleTimeString()}</h2>

        </div>

    );

}

export default Clock;