import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import CircleIcon from '@mui/icons-material/Circle';
import EditIcon from '@mui/icons-material/Edit';
// import BSIconButton from "../../components/BSIconButton";
// import BSScreenHeader from "../../components/BSScreenHeader";
import BSScreenHeader from "../../../component/BSScreenHeader";
import BSIconButton from "../../../component/BSIconButton"
import { Get } from "../../../config/apibasemethods";

function CourseGet() {
  const [listData, setListData] = useState([]);
  let nav = useNavigate();

//   let getdata = () => {
//     getFbData("Institute", '')
//       .then((res) => {
//         setListData([...res]);
//       })
//       .catch((err) => {
//         console.log('no data found')
//       });
//   };

//   useEffect(() => {
//     getdata();
//   }, []);
//   console.log(listData)

let getdata = () => {
    Get('/course?page=0').then((res) => {
        console.log(res.data.data);
        console.log(res)
        setListData([...res.data.data]);
    })
        .catch((err) => {
            console.log(err);
        });
};
useEffect(() => {
    getdata();
}, [])

  let edit = (e) => {
    nav('/adminportal/instituteform', {
      state: e
    })
  }

  return <>
  <BSScreenHeader title="Institute List" />
    <Paper elevation={3} fullwidth="true" sx={{
      height: '50px', margin: '10px', textAlign: 'center', display: 'flex',
      alignItems: 'center'
    }}>
      <Grid container sx={{}} >
        <Grid item md={3} xs={3}>
          <Typography variant="h6">Course</Typography>
        </Grid>
        <Grid item md={3} xs={3}>
          <Typography variant="h6">Short Name</Typography>
        </Grid>
        <Grid item md={2} xs={2}>
          <Typography variant="h6">Duration</Typography>
        </Grid>
        <Grid item md={2} xs={2}>
          <Typography variant="h6">Fees</Typography>
        </Grid>
        <Grid item md={1} xs={1}>
            
          </Grid>
          <Grid item md={1} xs={1}>
            
          </Grid>
      </Grid>
    </Paper >

    {listData.map((x, i) => { 
      return (<Paper key={i} elevation={3} fullwidth="true" sx={{
        height: '50px', margin: '10px', textAlign: 'center', display: 'flex',
        alignItems: 'center'
      }}>
        <Grid container >
          <Grid item md={3} xs={3} >
            {x.name}
          </Grid>
          <Grid item md={3} xs={3}>
            {x.shortName}
          </Grid>
          <Grid item md={2} xs={2}>
            {x.duration}
          </Grid>
          <Grid item md={2} xs={2}>
            {x.fees}
          </Grid>
          {/* <Grid item md={1} xs={1}>
            {x.active ? <BSIconButton size="large" icon={<CircleIcon />} sx={{ color: 'green' }} arialabel='active' /> : 
            <BSIconButton size="large" icon={<CircleIcon />} sx={{ color: 'red' }} arialabel="inactive" /> }
          </Grid>
          <Grid item md={1} xs={1}>
            {<BSIconButton size="large" icon={<EditIcon />} onClick={() => edit(x)} arialabel="edit" />}
          </Grid> */}
        </Grid>
      </Paper >)
    })}
  </>
}

export default CourseGet;