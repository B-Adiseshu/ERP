function DashboardContent() {
  return (
    <div style={styles.container}>
      <div style={styles.text}>Feel Free To Explore....!</div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  },
  text: {
    fontWeight: "bold",
    fontSize: "44px",
  },
};

export default DashboardContent;
