import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const OrdersCalendar = ({ orders }) => {
  console.log(orders);

  const events = orders.map((order) => ({
    id: order.id,
    title: `Order ${order.orderId}`,
    start: new Date(order.orderDate),
    end: new Date(order.orderDate),
    allDay: true,
  }));

  return (
    <div>
      <h2>Orders Calendar View</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default OrdersCalendar;
