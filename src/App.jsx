import { Container, Navbar, Row, Col } from 'react-bootstrap'
import './App.css'
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars } from '@fortawesome/free-solid-svg-icons/faMars';
import { faVenus } from '@fortawesome/free-solid-svg-icons';

import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import { useState } from 'react';
import coverMale from './assets/cover.png';
import coverFemale from './assets/cover4.png';




const PrettoSlider = styled(Slider)({

  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
    backgroundImage: 'var(--calbtn)'

  },
  '& .MuiSlider-rail': {
    backgroundImage: 'var(--calbtn)'
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid var(--bordercolor)',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&::before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,

    borderRadius: '50% 50% 50% 0',
    backgroundImage: ' var(--calbtn)',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&::before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',

    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});
function App() {
  //states
  const [wvalue, setwValue] = useState(50)
  const [hvalue, sethValue] = useState(100)
  const [bmi, setbmi] = useState(null)
  const [sgender, setgender] = useState('male')
  const [healthrange, sethealthrange] = useState({ min: '', max: '' })
  const [showbmi, setshowbmi] = useState(false)

  //handle weight value
  const handlewValue = (_, wvalue) => {
    setwValue(wvalue)
  }
  //handle height value
  const handlehValue = (_, hvalue) => {
    sethValue(hvalue)
  }
  //calculate bmi
  const calculate = () => {
    const height = hvalue / 100
    const bmi = wvalue / (height * height)
    setbmi(bmi.toFixed(2))
    const minWeight = (18.5 * height * height).toFixed(2)
    const maxweight = (24.9 * height * height).toFixed(2)
    sethealthrange({ min: minWeight, max: maxweight })
    setshowbmi(true)
  }
  //for switching colr based on gender
  const switchtheme = (gender) => {
    if (gender == 'male') {
      document.querySelector('body').setAttribute('data-theme', 'blue')
      setgender('male')

    } else {
      document.querySelector('body').setAttribute('data-theme', 'pink')
      setgender('female')
    }
    setshowbmi(false)
  }
  //change image based on gender
  const imageUrl = sgender === 'male' ? coverMale : coverFemale

  return (
    <>
      <div>
        <Navbar>
          <Container fluid >
            <Navbar.Brand href="#home" className='text-white d-flex align-items-center'>
              <img
                alt=""
                src="/src/assets/logo1.png"
                width="100"
                height="100"
                className="d-inline-block align-top "
              />
              <h3 className='nill'>𝓕𝓲𝓽𝓷𝓮𝓼𝓼</h3>
            </Navbar.Brand>

          </Container>
        </Navbar>
        <Container fluid className=''>
          <Row>
            <Col md={1}></Col>
            <Col md={10}>
              <Row>
                <Col md={6} className='p-4'>
                  <Button variant="outlined" className='border-2 radius-0   text-white fs-5 fw-bolder  me-3 ' onClick={() => switchtheme('male')} style={{ backgroundColor: sgender === 'male' ? '#2196F3' : '#202020' }}><FontAwesomeIcon icon={faMars} className='me-2' />MALE</Button>

                  <Button
                    variant="outlined"
                    className='border-2 text-white fs-5 fw-bolder'
                    onClick={() => switchtheme('female')}
                    style={{
                      backgroundColor: sgender === 'female' ? '#f711d1' : '#202020', borderColor: "purple"

                    }}
                  >
                    <FontAwesomeIcon icon={faVenus} className='me-2' />FEMALE
                  </Button>



                  <Box sx={{ m: 3 }} />
                  <div className="d-flex justify-content-between">
                    <Typography gutterBottom className='text-white'>Weight(kg)</Typography>
                    <p className='fw-bold text-white'>Your Weight : {wvalue} kg</p>
                  </div>

                  <PrettoSlider
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    value={wvalue}
                    onChange={handlewValue}
                    min={1}
                    max={200}
                  />



                  <Box sx={{ m: 3 }} />
                  <div className="d-flex justify-content-between">
                    <Typography gutterBottom className='text-white'>Height(cm)</Typography>
                    <p className='fw-bold text-white'>Your Height : {hvalue} cm</p>
                  </div>
                  <PrettoSlider
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    value={hvalue}
                    min={40}
                    max={300}
                    onChange={handlehValue}
                  />
                  <Button variant="outlined" className='  text-white  fw-bolder mt-5 calbtn' onClick={calculate} style={{ fontSize: '20px' }}>CALCULATE BMI</Button>
                </Col>

                <Col md={6} className='d-none  d-md-inline'>
                  <div className="position-relative" >
                    <img src={imageUrl} alt="" width="100%" height="630px" className='position-relative' style={{ zIndex: 2 }} />
                    <div
                      className="bgrect  position-absolute"
                      style={{ top: 0, left: '30%', height: '628px', zIndex: 1, width: '40%' }}
                    ></div>
                  </div>
                </Col>
              </Row>
            </Col>
            <div className='footerbg w-100 position-absolute px-md-5 px-3' style={{ height: 'auto', top: '80%', left: 0, zIndex: 0 }}>
              {showbmi && (
                <Container className='px-md-5  px-0 py-md-3 '>
                  <Row className='text-center'>
                    <Col md={2} className='text-center'>
                      <div className="px-md-0 px-5 mt-md-0 mt-3 ">
                        <p className='fs-5 text-dark ' >YOUR BMI Score
                          <br />
                          <span className='fw-bold  bmiscore text-white'>{bmi}</span>
                        </p>
                      </div>



                    </Col>
                    <Col md={4}>
                      <i>  <p className='px-5 py-1 fs-5   font fw-semibold text-dark' >Healthy weight range <br /> for your height: <br /><span className='fw-bold fs-3 text-white' > {healthrange.min}kg - {healthrange.max}kg</span> </p></i></Col>
                  </Row>

                </Container>
              )}
            </div>
          </Row>
        </Container>

      </div>

    </>
  )
}

export default App
