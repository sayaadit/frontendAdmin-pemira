import React, {useState, useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import axios from 'axios'
import Loading from '../loading'
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    backgroundColor: '#282A74',
    borderRadius: 24,
  },
}))

const RekapDpm = () => {
  const classes = useStyles()
  const [data, setData] = useState(null)
  let namaPaslon = 'belum memilih'
  useEffect(() => {
    async function fetchData() {
      const bem = await axios(
        'http://kinamotif.com/backend/api/v1/get-count-dpm',
      )

      setData(bem.data.data)
    }

    fetchData()
  }, [])
  if (data === null) {
    return <Loading />
  }
  console.log(data)
  return (
    <div>
      {data.map((value, i) => {
        if (value.suara_dpm !== '0') {
          namaPaslon = value.suara_dpm
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

export default RekapDpm
