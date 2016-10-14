SELECT * from batteries, rims, paints, roof, liner, seats, decor
WHERE batteries.battery_id = $1 AND rims.rim_id = $2 AND paints.color_id = $3 AND roof.roof_id = $4 AND liner.liner_id = $5
AND seats.seat_id = $6 AND decor.decor_id = $7;
