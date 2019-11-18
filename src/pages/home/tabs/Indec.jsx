import React, {useEffect, useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import axios from 'axios'
import Loading from '../../loading'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    backgroundColor: '#282A74',
    borderRadius: 24,
  },
}))

const RekapIndec = () => {
  const classes = useStyles()
  const [data, setData] = useState(null)
  let namaPaslon = 'belum memilih'
  useEffect(() => {
    async function fetchData() {
      const himpunan = await axios(
        'http://localhost:8000/api/v1/get-count-himpunan/indec',
      )
      setData(himpunan.data.data)
    }

    fetchData()
  }, [])
  if (data === null) {
    return <Loading />
  }
  return (
    <div>
      {data.map((value, i) => {
        if (value.suara_himp !== '0') {
          namaPaslon = value.suara_himp
        }
        return (
          <Paper className={classes.root} key={i}>
            <div style={{flexDirection: 'row', display: 'flex'}}>
              <div style={{flex: 0.1}}>
                <div
                  style={{
                    backgroundColor: '#777777',
                    width: 64,
                    height: 64,
                    alignItems: 'center',
                    borderRadius: 8,
                  }}
                >
                  <Typography
                    variant='h5'
                    component='h3'
                    style={{
                      color: '#373A3C',
                      textAlign: 'center',
                      fontWeight: 'bold',
                      paddingTop: 15,
                    }}
                  >
                    1
                  </Typography>
                </div>
              </div>
              <Typography
                variant='h5'
                component='h3'
                style={{flex: 1, color: '#fff', paddingTop: 15}}
              >
                {namaPaslon} : {value.CountOf} Suara
              </Typography>
            </div>
          </Paper>
        )
      })}
    </div>
  )
}

export default RekapIndec
