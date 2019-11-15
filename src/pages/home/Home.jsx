import React from 'react'
import Header from '../../component/header/Header'
import RekapDpm from './rekapDpm'
import RekapBem from './rekapBem'

import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Container from '@material-ui/core/Container'

import DI from './tabs/DI'
import DKV from './tabs/DKV'
import KTM from './tabs/KTM'
import SR from './tabs/SR'

const useStyles = makeStyles(theme => ({
  tabs: {
    flexGrow: 1,
    marginBottom: 15,
  },
  tab: {
    color: '#282A74',
    fontFamily: 'roboto',
    fontSize: 24,
  },
}))

function Home() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <div>
      <Header />
      <Container>
        <h1>Rekap BEM</h1>
        <RekapDpm />
        <h1>Rekap DPM</h1>
        <RekapBem />
        <h1>Rekap Himpunan</h1>
        <Paper className={classes.tabs}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor='primary'
            textColor='primary'
            centered
          >
            <Tab label='DI' className={classes.tab} />
            <Tab label='KTM' className={classes.tab} />
            <Tab label='DKV' className={classes.tab} />
            <Tab label='SR' className={classes.tab} />
          </Tabs>
        </Paper>
        {value === 0 && <DI />}
        {value === 1 && <KTM />}
        {value === 2 && <DKV />}
        {value === 3 && <SR />}
      </Container>
    </div>
  )
}

export default Home
