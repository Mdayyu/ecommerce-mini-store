import { useEffect, useState } from "react";

const useDashboardData = () => {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    // Simulasi fetch data dashboard
    setData(["dummy"]);
  }, []);

  return data;
};

export default useDashboardData;
