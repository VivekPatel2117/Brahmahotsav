import React,{useState} from 'react'
import styles from './dashboard.module.css'
import BarBox from '../../../components/BarBox/BarBox';
import EnhancedTable from '../../../components/DataTable/Table';
export default function Dashboard() {
    const pagesArr = [
        {
          logical_name: "home",
          second: "Home",
        },
        {
          logical_name: "celebration",
          second: "Celebration",
        },
        {
          logical_name: "flowEvents",
          second: "Flow Events",
        },
        {
          logical_name: "participate",
          second: "Participate",
        },
      ];
      const [selectedDiv, setSelectedDiv] = useState("Home");
      const handleSelectClick = (name) => {
        setSelectedDiv(name);   
      }
  return (
    <div className={styles.dashbpardWrapper}>
        <h1 style={{textAlign:"center",marginTop:"5vh"}}>Dashboard - {selectedDiv}</h1>
        <BarBox onSelect={handleSelectClick} itemList={pagesArr} />
        <div className={styles.tableWrapper}>
            <EnhancedTable/>
        </div>
    </div>
  )
}
