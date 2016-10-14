SELECT battery, battery_price
FROM batteries
WHERE batteries.battery_id = $1;
