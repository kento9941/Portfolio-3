'use client';

import { useEffect, useState } from 'react';

const LocalTime = () => {
    const [formattedTime, setFormattedTime] = useState<string>('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();

            // get the time zone
            const tzStr = new Intl.DateTimeFormat('en-AU', {
                timeZoneName: 'short',
            }).format(now);

            const tz = tzStr.split(' ').pop() || 'ACST';

            // get the zero-padded day
            const day = String(now.getDate()).padStart(2, '0');

            // get the month uppercase
            const month = now.toLocaleString('en-AU', { month: 'short' }).toUpperCase();

            // get the 24-hour time
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');

            setFormattedTime(`${tz} ${day} ${month} ${hours}:${minutes}`);
        };

        updateTime();

        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return <span>{formattedTime || ""}</span>;
}

export default LocalTime;
