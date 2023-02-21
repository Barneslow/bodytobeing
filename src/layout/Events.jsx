import EventCard from "../components/ui/EventCard";
import styles from "./Events.module.css";
import "react-calendar/dist/Calendar.css";

const data = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1520&q=80",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

const Footer = () => {
  return (
    <section id="Events" className={styles.container}>
      {data.map((item, index) => (
        <EventCard key={index} data={item} />
      ))}
    </section>
  );
};

export default Footer;
