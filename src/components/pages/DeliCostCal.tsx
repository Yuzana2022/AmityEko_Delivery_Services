import React, { useEffect } from 'react';
//import styles 👇
import 'react-modern-drawer/dist/index.css'
import styles from '../../styles/pages.module.css';
import styleHeader from '../../styles/header.module.css';

// app bar
import Box from '@mui/material/Box';
import {
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Grid from '@mui/material/Grid';

import { StoreState } from '../../stores/reducers/index';
import { connect } from 'react-redux';
import { MenuDataInterFace } from '../../stores/interfaces/menu.interface';
import { HeaderDataInterFace } from '../../stores/interfaces/header.interface';
import { NavigatorDataInterFace } from '../../stores/interfaces/navigator.interface';
import { ToggleMenuACT } from '../../stores/actions/menuAction';
import { HeaderOpenACT } from '../../stores/actions/HeaderAction';
import { NavOpenACT } from '../../stores/actions/NavigatorAction';

// fetch data
import towns from '../datas/towns';

//atoms
import ComboBox from '../atoms/ComboBox';

// icons
import SearchIcon from '@mui/icons-material/Search';
import LocationCityIcon from '@mui/icons-material/LocationCity';

import eventBus from '../events/EventBus';

//checkbox
import Checkbox from '@mui/material/Checkbox';

//list
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Town } from '../interfaces/town';
import { Route } from '../interfaces/route';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const { useState } = React;

const CalculatePage = (props: any) => {
  const [towns1, setTowns1] = React.useState(towns);
  const [valueFrom, setValueFrom] = React.useState(towns[4].name);
  const [valueTo, setValueTo] = React.useState(towns[3].name);

  const [maxRoutes, setMaxRoutes] = React.useState(0);
  const [useTwice, setUseTwice] = React.useState(false);
  const [selectedTowns, setSelectedTowns] = React.useState<Town[]>([]);
  const [selectedTownName, setSelectedTownName] = React.useState(towns1[towns1.length - 1].name);
  const [definedCost, setDefinedCost] = React.useState(0);

  //results
  const [cost, setCost] = React.useState(0);
  const [routeCount, setRouteCount] = useState(0);

  const maxRoutesChanged = (event: any) => {
    setMaxRoutes(parseInt(event.target.value));
  }
  const fromCityChanged = (event: SelectChangeEvent) => {
    setValueFrom(event.target.value as string);
  };
  const toCityChanged = (event: SelectChangeEvent) => {
    setValueTo(event.target.value as string);
  };
  const definedCostChanged = (event: any) => {
    setDefinedCost(parseInt(event.target.value));
  }

  const routes = [
    { id: 'AB1', from: 'A', to: 'B', cost: 1 },
    { id: 'AC4', from: 'A', to: 'C', cost: 4 },
    { id: 'AD10', from: 'A', to: 'D', cost: 10 },
    { id: 'BE3', from: 'B', to: 'E', cost: 3 },
    { id: 'CD4', from: 'C', to: 'D', cost: 4 },
    { id: 'CF2', from: 'C', to: 'F', cost: 2 },
    { id: 'DE1', from: 'D', to: 'E', cost: 1 },
    { id: 'EB3', from: 'E', to: 'B', cost: 3 },
    { id: 'EA2', from: 'E', to: 'A', cost: 2 },
    { id: 'FD1', from: 'F', to: 'D', cost: 1 },
  ];

  useEffect(() => {
    console.log('routeCount',routeCount)
  }, [routeCount]);

  //calculation
  var count = 0;
  var nodesArray = [];
  
  const calRoutes = () => {
    let from = '';
    let to = '';
    let index = towns.findIndex(t => t.name == valueFrom);
    if (index > -1) from = towns[index].id;
    let ind = towns.findIndex(t => t.name == valueTo);
    if (ind > -1) to = towns[ind].id;
    if (from && to) {
      let start = from;
      let end = to;
      let nodes = routes.filter(r => r.from == start);
      if (nodes.length > 0) {
        if (definedCost == 0) {
          if(maxRoutes > 0){
            for (let i = 0; i < nodes.length; i++) {
              nodesArray.push(nodes[i]);
              if(nodesArray.length < maxRoutes){
                recursiveCalRoutesByMaxRoutes(nodes[i].to, end);
              }else{
                if (nodes[i].to == end) {
                  count = count + 1; 
                  setRouteCount(count);
                }
              }
            }
          }else{
              for (let i = 0; i < nodes.length; i++) {
                start = nodes[i].to;
                recursiveCalRoutes(start, end);
              }
          }
        } 
        else if (definedCost > 0) {
          for (let i = 0; i < nodes.length; i++) {
            start = nodes[i].to;
            recursiveCalRoutesByCost(start,end,nodes[i].cost);
          }
        }
      }
    }
  }

  function recursiveCalRoutesByMaxRoutes(start: string, end: string) {
    let nodes = routes.filter(r => r.from == start);
    if (nodes.length > 0) {
      for (let i = 0; i < nodes.length; i++) {
        if(nodesArray.length < maxRoutes){
          recursiveCalRoutesByMaxRoutes(nodes[i].to,end);
        }else{
          if (nodes[i].to !== end) {
            count = count + 1; 
            setRouteCount(count);
          }
        }
      }
    }
  }

  function recursiveCalRoutesByCost(start: string,end : string,cost : number) {
    let nodes = routes.filter(r => r.from == start);
    if (nodes.length > 0) {
      for (let i = 0; i < nodes.length; i++) {
        let cost1 = cost + nodes[i].cost;
        if (cost < definedCost) {
          recursiveCalRoutesByCost(nodes[i].to,end,cost1)
        }
        else {
          if (nodes[i].to == end) {
          count = count + 1; 
          setRouteCount(count);
          }
        }
      }
    }
  }


  function recursiveCalRoutes(start: string, end: string) {
    let nodes = routes.filter(r => r.from == start);
    if (nodes.length > 0) {
      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].to != end) {
          recursiveCalRoutes(nodes[i].to,end);
        }
        else {
          count = count + 1; 
          setRouteCount(count);
        }
      }
    }
  }

  eventBus.on("selectValue", (data: any) => {

    if (data.id == 'fromCity') {
      setValueFrom(data.value)
    } else {
      setValueTo(data.value)
    }
  }
  );

  if (props.headerOpen.headerOpen) props.HeaderOpenACT(false);
  let fromCity = { array: towns, id: 'fromCity' };
  let toCity = { array: towns, id: 'toCity' };

  const selectTownChanged = (event: any) => {
    if (event.target.value != 'None') {

      let index = towns1.findIndex(t => t.name == event.target.value);
      if (index >= 0) {
        setSelectedTownName(towns1[index].name);
        let temp = selectedTowns;

        if (towns1[index]) {
          if (temp.length > 0) {
            let ind = temp.findIndex(t => t.name == towns1[index].name);
            if (ind < 0) temp.push(towns1[index]);
          } else {
            temp.push(towns1[index]);
          }
          setSelectedTowns([...temp]);
        }
      }
    }
  }

  const calCost = () => {
    let cost: any = 0;
    if (selectedTowns.length > 0) {
      for (let i = 0; i < selectedTowns.length - 1; i++) {
        let x = routes.findIndex(r => r.from == selectedTowns[i].id && r.to == selectedTowns[i + 1].id);
        if (x > -1) cost += routes[x].cost;
        else cost = 'No Such Route';
      }
      setCost(cost);
    }
  }

  const refreshCost = () => {
    setSelectedTowns([]);
    setSelectedTownName(towns1[towns1.length - 1].name);
    setCost(0);
  }

  const refreshRoutes = () => {
    setValueFrom('');
    setValueTo('');
    setMaxRoutes(0);
  }

  return (
    <>
      <div className={styles.screen}>
        <Typography className={styles.send_typography}
          variant="subtitle1"
          p={1}
          component="div"
          sx={{ flexGrow: 1, mb: 3 }}
          align="left"
        >
          AB1, AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1
        </Typography>

        <Stack direction="row" spacing={3}>
          <Box sx={{ minWidth: 120, mr: 0.5 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">From</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedTownName}
                label="From"
                onChange={selectTownChanged}
              >
                {
                  towns.map((town) => {
                    return (
                      <MenuItem key={town.name} value={town.name}>
                        {town.name}
                      </MenuItem>
                    );
                  })
                }
              </Select>
            </FormControl>
          </Box>

          <Button variant="contained" className={styles.send_btn_contained}
            onClick={calCost}>
            Calculate Delivery Cost
          </Button>
          <Button variant="contained" className={styles.send_btn_contained}
            onClick={refreshCost}>
            Refresh
          </Button>
        </Stack>
        <br></br>
        <Typography className={styles.send_typography}
          variant="subtitle1"
          p={1}
          component="div"
          sx={{ flexGrow: 1, mb: 3 }}
          align="left"
        >
          You selected the following towns.
        </Typography>
        <div>
          <List>
            {selectedTowns.map((town: any) => (
              <div className={styleHeader.send_selected_menu}>
                <ListItemButton>
                  <ListItemIcon>
                    <LocationCityIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="body2" component="div">
                      {town.name}
                    </Typography>
                  </ListItemText>
                </ListItemButton>
              </div>
            ))}
          </List>
        </div>
        <Typography className={styles.send_typography}
          variant="subtitle1"
          p={1}
          component="div"
          sx={{ flexGrow: 1, mb: 3 }}
          align="left"
        >
          The delivery cost for a given delivery route is {cost}.
        </Typography>
        <br></br>

        <Grid container sx={{ mb: 3 }}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box sx={{ minWidth: 120, mr: 0.5, mb: 1 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">From</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={valueFrom}
                  label="From"
                  onChange={fromCityChanged}
                >
                  {
                    towns.map((town) => {
                      return (
                        <MenuItem key={town.name} value={town.name}>
                          {town.name}
                        </MenuItem>
                      );
                    })
                  }
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120, mr: 0.5, mb: 1 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">To</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={valueTo}
                  label="To"
                  onChange={toCityChanged}
                >
                  {
                    towns.map((town) => {
                      return (
                        <MenuItem key={town.name} value={town.name}>
                          {town.name}
                        </MenuItem>
                      );
                    })
                  }
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120, mr: 0.5, mb: 1 }}>
              <TextField
                id="outlined-number"
                label="Maximum Stops"
                type="number"
                value={maxRoutes}
                onChange={maxRoutesChanged}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
            <Box sx={{ minWidth: 120, mr: 0.5, mb: 1 }}>
              <TextField
                id="outlined-number"
                label="Delivery Cost less than"
                type="number"
                value={definedCost}
                onChange={definedCostChanged}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>

          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <div>
              <Button variant="contained" sx={{ mt: 2, mb: 1 }} startIcon={<SearchIcon />} className={styles.send_btn_contained}
                onClick={calRoutes}>
                Calculate Delivery Routes
              </Button>
            </div>

            <div>
              <Button variant="contained" sx={{ mt: 2, mb: 1 }} className={styles.send_btn_contained}
                onClick={refreshRoutes}>
                Refresh
              </Button>
            </div>
          </Grid>
        </Grid>
        <br></br>
        <div>
          <Typography className={styles.send_typography}
            variant="subtitle1"
            p={1}
            component="div"
            sx={{ flexGrow: 1, mb: 3 }}
            align="left"
          >
            The  number of possible delivery routes is {routeCount}.
          </Typography>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = ({
  menuState, headerState, navState
}: StoreState): { open: MenuDataInterFace; headerOpen: HeaderDataInterFace; navOpen: NavigatorDataInterFace; } => {
  return {
    open: menuState,
    headerOpen: headerState,
    navOpen: navState
  };
};

export default connect(mapStateToProps, {
  ToggleMenuACT, HeaderOpenACT, NavOpenACT
})(CalculatePage);