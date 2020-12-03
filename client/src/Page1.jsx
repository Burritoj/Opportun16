import React, {useState} from 'react'
import { ListGroup ,FormControl, InputGroup, Table, Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {submit} from './utils/submit'
import {getInstance} from './utils/ToolCalcs';


export function Page1(props){

  const Tool = getInstance();

  const {active, dbCacheArray, setdbCacheArray} = props;

  const [nameEntered, setNameEntered] = useState('');
  const [categoryEntered, setCategoryEntered] = useState('');
  const [notesEntered, setNotesEntered] = useState('');
  const [assetEntered, setAssetEntered] = useState('');
  const [threatEntered, setThreatEntered] = useState('');
  const [lossEntered, setLossEntered] = useState('');

  const [padI, setpadI] = useState('');
  const [padC, setpadC] = useState('');
  const [cfaI, setcfaI] = useState('');
  const [cfaC, setcfaC] = useState('');
  const [rsI, setrsI] = useState('');
  const [rsC, setrsC] = useState('');
  const [plmrI, setplmrI] = useState('');
  const [plmrC, setplmrC] = useState('');
  const [slmrI, setslmrI] = useState('');
  const [slmrC, setslmrC] = useState('');
  const [tc, settc] = useState('');
  const [slp, setslp] = useState('');

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [buttonDisabled2, setButtonDisabled2] = useState(true);
  const [buttonDisabled3, setButtonDisabled3] = useState(true);
  const [buttonDisabled4, setButtonDisabled4] = useState(true);
  const [buttonDisabled5, setButtonDisabled5] = useState(true);
  const [buttonDisabled6, setButtonDisabled6] = useState(true);
  const [buttonDisabled7, setButtonDisabled7] = useState(true);
  const [buttonDisabled8, setButtonDisabled8] = useState(true);
  const [buttonDisabled9, setButtonDisabled9] = useState(true);
  const [buttonDisabled10, setButtonDisabled10] = useState(true);
  const [buttonDisabled11, setButtonDisabled11] = useState(true);
  const [buttonDisabled12, setButtonDisabled12] = useState(true);
  const [textbool1, settextbool1] = useState(true);
  const [textbool2, settextbool2] = useState(true);
  const [textbool3, settextbool3] = useState(true);
  const [textbool4, settextbool4] = useState(true);
  const [textbool5, settextbool5] = useState(true);
  const [textbool6, settextbool6] = useState(true);

  const [backgroundcolor, setbackgroundcolor] = useState('');

  const handleName = event => {
    setNameEntered(event.target.value);
    if(event.target.value === ''){
      settextbool1(true);
    }
    else{
      settextbool1(false);
    }
  }

  const handleCategory = event => {
    setCategoryEntered(event.target.value);
    if(event.target.value === ''){
      settextbool2(true);
    }
    else{
      settextbool2(false);
    }
  }

  const handleNotes = event => {
    setNotesEntered(event.target.value);
    if(event.target.value === ''){
      settextbool3(true);
    }
    else{
      settextbool3(false);
    }
  }

  const handleAsset = event => {
    setAssetEntered(event.target.value);
    if(event.target.value === ''){
      settextbool4(true);
    }
    else{
      settextbool4(false);
    }
  }

  const handleThreat = event => {
    setThreatEntered(event.target.value);
    if(event.target.value === ''){
      settextbool5(true);
    }
    else{
      settextbool5(false);
    }
  }

  const handleLoss = event => {
    setLossEntered(event.target.value);
    if(event.target.value === ''){
      settextbool6(true);
    }
    else{
      settextbool6(false);
    }
  }

  const handleSelectpadI=(value)=>{
    Tool.setPADInherent(value-1);
    Tool.calculateTree();
    //get potentially changed values of calculated variables
    Tool.getState();
    //update visuals of those variables
    setpadI(value);
    setButtonDisabled(false);
  }
  const handleSelectpadC=(value)=>{
    Tool.setPADControls(value-1);
    Tool.calculateTree();
    setpadC(value);
    setButtonDisabled2(false);
  }
  const handleSelectcfaI=(value)=>{
    Tool.setCFAInherent(value-1);
    Tool.calculateTree();
    setcfaI(value);
    setButtonDisabled3(false);
  }
  const handleSelectcfaC=(value)=>{
    Tool.setCFAControls(value-1);
    Tool.calculateTree();
    setcfaC(value);
    setButtonDisabled4(false);
  }
  const handleSelectrsI=(value)=>{
    Tool.setRSInherent(value-1);
    Tool.calculateTree();
    setrsI(value);
    setButtonDisabled5(false);
  }
  const handleSelectrsC=(value)=>{
    Tool.setRSControls(value-1);
    Tool.calculateTree();
    setrsC(value);
    setButtonDisabled6(false);
  }
  const handleSelectplmrI=(value)=>{
    Tool.setPLMRInherent(value-1);
    Tool.calculateTree();
    setplmrI(value);
    setButtonDisabled7(false);
  }
  const handleSelectplmrC=(value)=>{
    Tool.setPLMRControls(value-1);
    Tool.calculateTree();
    setplmrC(value);
    setButtonDisabled8(false);
  }
  const handleSelectslmrI=(value)=>{
    Tool.setSLMRInherent(value-1);
    Tool.calculateTree();
    setslmrI(value);
    setButtonDisabled9(false);
  }
  const handleSelectslmrC=(value)=>{
    Tool.setSLMRControls(value-1);
    Tool.calculateTree();
    setslmrC(value);
    setButtonDisabled10(false);
  }
  const handleSelecttc=(value)=>{
    Tool.setTC(value-1);
    Tool.calculateTree();
    settc(value);
    setButtonDisabled11(false);
    }
  const handleSelectslp=(value)=>{
    Tool.setSLP(value-1);
    Tool.calculateTree();
    setslp(value);
    setButtonDisabled12(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const tempDateCreated = new Intl.DateTimeFormat('en-US').format(Date.now());
    const treeData = Tool.getTreeData();
    const newEntry = {
      name: nameEntered,
      category: categoryEntered,
      dateCreated: tempDateCreated,
      data: treeData,
      notes: notesEntered,
      asset: assetEntered,
      threat: threatEntered,
      loss: lossEntered
    };
    setdbCacheArray([newEntry,...dbCacheArray]);
    submit(newEntry);
  };

  const handleColor=()=>{
    if(cfaI === '1') {   /* first try at colors, but it updates one click late */
        setbackgroundcolor('#32CD32')
    } else if (cfaI === '2') {
        setbackgroundcolor('#7CFC00')
    } else if (cfaI === '3') {
        setbackgroundcolor('#FFFF00')
    } else if (cfaI === '4') {
        setbackgroundcolor('#FF0000')
    } else if (cfaI === '5') {
        setbackgroundcolor('#B22222')
    }
  }

  const convertToOutputText=(num)=>{
    switch(num) {
      case 0:
        return "very low"
      case 1:
        return "low"
      case 2:
        return "medium"
      case 3:
        return "high"
      case 4:
        return "very high"
      default:
        return "default";
    }
  }

  const convertToMoney=(num)=>{
    switch(num) {
      case 0:
        return "<$9,999"
      case 1:
        return "$10,000 - $99,999"
      case 2:
        return "$100,000 - $999,999"
      case 3:
        return "$1,000,000 - $9,999,999"
      case 4:
        return ">=$10,000,000"
      default:
        return "default";
    }
  }

  return(
    <div hidden={!active}>
      <Container fluid="l">
        <Row>
          <Col lg="8">
            <Row>
              <Col>
                <div>
                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text style = {{width:170}} id="inputGroup-sizing">Asset At Risk</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={handleAsset} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                  </InputGroup>

                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text style = {{width:170}} id="inputGroup-sizing">Threat Community</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={handleThreat} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                  </InputGroup>

                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text style = {{width:170}} id="inputGroup-sizing">Loss Event</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={handleLoss} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                  </InputGroup>

                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text style = {{width:170}} id="inputGroup-sizing">Type of Loss Event</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={handleCategory} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                  </InputGroup>
                </div>
              </Col>
              <Col>
                <div>
                  <InputGroup  size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text style = {{width:80}} id="inputGroup-sizing">Analyst</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={handleName} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                  </InputGroup>

                  <InputGroup style = {{ height: 125}} size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text style = {{width:80, textAlign: 'center'}} id="inputGroup-sizing">Notes</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onChange={handleNotes} as="textarea" style = {{height: 125}} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                  </InputGroup>
                </div>
              </Col>
            </Row>
            <Row>
             <Col>
                     <Card className="unindented-row" style={{borderColor: 'transparent', elevation: 0}}>
                        <Card.Body >
                            <Card style={{ width: '21rem', height: '9rem' }} className="text-center" >
                            <Card.Header as="h5" style={{fontSize: 17}}>Overall Risk</Card.Header>
                            <Card.Body>
                                <CardGroup>
                                    <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                        <Card.Title style={{fontSize: 15}}>Inherent</Card.Title>
                                        <Card.Text style={{ fontSize: 17, backgroundColor: backgroundcolor }} >
                                            {convertToOutputText(Tool.getORInherent())}
                                        </Card.Text>
                                    </Card>
                                    <Card style={{borderColor: 'transparent', elevation: 0}}>

                                    </Card>
                                    <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                        <Card.Title style={{fontSize: 15}}>Residual</Card.Title>
                                        <Card.Text style={{ fontSize: 17 }}>
                                            {convertToOutputText(Tool.getORResidual())}
                                        </Card.Text>
                                    </Card>
                                </CardGroup>
                            </Card.Body>
                            </Card>
                        </Card.Body>
                    </Card>
                    <Card className="unindented-row" style={{borderColor: 'transparent', elevation: 0}}>
                        <CardGroup>
                            <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                                <Card.Body>
                                    <Card style={{ width: '21rem', height: '9rem' }} className="text-center" >
                                    <Card.Header as="h5" style={{fontSize: 17}}>Primary Risk</Card.Header>
                                    <Card.Body>
                                        <CardGroup>
                                            <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                                <Card.Title style={{fontSize: 15}}>Inherent</Card.Title>
                                                <Card.Text style={{ fontSize: 17, backgroundColor: backgroundcolor }} >
                                                    {convertToOutputText(Tool.getPRInherent())}
                                                </Card.Text>
                                            </Card>
                                            <Card style={{borderColor: 'transparent', elevation: 0}}>

                                            </Card>
                                            <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                                <Card.Title style={{fontSize: 15}}>Residual</Card.Title>
                                                <Card.Text style={{ fontSize: 17 }}>
                                                    {convertToOutputText(Tool.getPRResidual())}
                                                </Card.Text>
                                            </Card>
                                        </CardGroup>
                                    </Card.Body>
                                    </Card>
                                </Card.Body>
                            </Card>
                            <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                                <Card.Body>
                                    <Card style={{ width: '21rem', height: '9rem', borderColor: 'transparent', elevation: 0 }} className="text-center" ></Card>
                                </Card.Body>
                            </Card>
                            <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                                <Card.Body>
                                    <Card style={{ width: '21rem', height: '9rem' }} className="text-center" >
                                    <Card.Header as="h5" style={{fontSize: 17}}>Secondary Risk</Card.Header>
                                    <Card.Body>
                                        <CardGroup>
                                            <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                                <Card.Title style={{fontSize: 15}}>Inherent</Card.Title>
                                                <Card.Text style={{ fontSize: 17, backgroundColor: backgroundcolor }} >
                                                    {convertToOutputText(Tool.getSRInherent())}
                                                </Card.Text>
                                            </Card>
                                            <Card style={{borderColor: 'transparent', elevation: 0}}>

                                            </Card>
                                            <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                                <Card.Title style={{fontSize: 15}}>Residual</Card.Title>
                                                <Card.Text style={{ fontSize: 17 }}>
                                                    {convertToOutputText(Tool.getSRResidual())}
                                                </Card.Text>
                                            </Card>
                                        </CardGroup>
                                    </Card.Body>
                                    </Card>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Card>
                    <Card className="unindented-row" style={{borderColor: 'transparent', elevation: 0}}>
                        <CardGroup>
                            <Card style={{ borderColor: 'transparent', elevation: 0 }} >
                                <Card.Body>
                                    <Card style={{ width: '21rem', height: '9rem' }} className="text-center" >
                                    <Card.Header as="h5" style={{fontSize: 17}}>Primary Loss Event Frequency</Card.Header>
                                    <Card.Body>
                                        <CardGroup>
                                            <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                                <Card.Title style={{fontSize: 15}}>Inherent</Card.Title>
                                                <Card.Text style={{ fontSize: 25, backgroundColor: backgroundcolor }} >
                                                    {Tool.getPLEFInherent()+1}
                                                </Card.Text>
                                            </Card>
                                            <Card style={{borderColor: 'transparent', elevation: 0}}>

                                            </Card>
                                            <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                                <Card.Title style={{fontSize: 15}}>Residual</Card.Title>
                                                <Card.Text style={{ fontSize: 25 }}>
                                                    {Tool.getPLEFResidual()+1}
                                                </Card.Text>
                                            </Card>
                                        </CardGroup>
                                    </Card.Body>
                                    </Card>
                                </Card.Body>
                            </Card>
                            <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                                <Card.Body>
                                    <Card style={{ width: '21rem', height: '9rem' }} className="text-center" >
                                    <Card.Header as="h5" style={{fontSize:14}}>Primary Loss Magnitude Responsive</Card.Header>
                                    <Card.Body>
                                        <CardGroup>
                                            <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                            <Card.Title style={{fontSize: 15}}>Inherent</Card.Title>
                                            <DropdownButton title={plmrI} id = "PLMRInherent">
                                                <Dropdown.Item eventKey="1" onSelect={()=>handleSelectplmrI(1)}>1</Dropdown.Item>
                                                <Dropdown.Item eventKey="2" onSelect={()=>handleSelectplmrI(2)}>2</Dropdown.Item>
                                                <Dropdown.Item eventKey="3" onSelect={()=>handleSelectplmrI(3)}>3</Dropdown.Item>
                                                <Dropdown.Item eventKey="4" onSelect={()=>handleSelectplmrI(4)}>4</Dropdown.Item>
                                                <Dropdown.Item eventKey="5" onSelect={()=>handleSelectplmrI(5)}>5</Dropdown.Item>
                                            </DropdownButton>
                                            </Card>
                                            <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                                <Card.Title style={{fontSize: 15}}>Controls</Card.Title>
                                                <DropdownButton title={plmrC} id = "PLMRControls">
                                                    <Dropdown.Item eventKey="1" onSelect={()=>handleSelectplmrC(1)}>1</Dropdown.Item>
                                                    <Dropdown.Item eventKey="2" onSelect={()=>handleSelectplmrC(2)}>2</Dropdown.Item>
                                                    <Dropdown.Item eventKey="3" onSelect={()=>handleSelectplmrC(3)}>3</Dropdown.Item>
                                                    <Dropdown.Item eventKey="4" onSelect={()=>handleSelectplmrC(4)}>4</Dropdown.Item>
                                                    <Dropdown.Item eventKey="5" onSelect={()=>handleSelectplmrC(5)}>5</Dropdown.Item>
                                                </DropdownButton>
                                            </Card>
                                            <Card style={{borderColor: 'transparent', elevation: 0}}>
                                                <Card.Title style={{fontSize: 15}}>Residual</Card.Title>
                                                <Card.Text style={{ fontSize: 25 }}>
                                                    {Tool.getPLMRResidual()+1}
                                                </Card.Text>
                                            </Card>
                                        </CardGroup>
                                    </Card.Body>
                                    </Card>
                                </Card.Body>
                            </Card>
                            <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                                <Card.Body>
                                    <Card style={{ width: '21rem', height: '9rem' }} className="text-center" >
                                    <Card.Header as="h5" style={{fontSize:13.5}}>Secondary Loss Magnitude Responsive</Card.Header>
                                    <Card.Body>
                                        <CardGroup>
                                            <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                            <Card.Title style={{fontSize: 15}}>Inherent</Card.Title>
                                            <DropdownButton title={slmrI} id = "SLMRInherent">
                                                <Dropdown.Item eventKey="1" onSelect={()=>handleSelectslmrI(1)}>1</Dropdown.Item>
                                                <Dropdown.Item eventKey="2" onSelect={()=>handleSelectslmrI(2)}>2</Dropdown.Item>
                                                <Dropdown.Item eventKey="3" onSelect={()=>handleSelectslmrI(3)}>3</Dropdown.Item>
                                                <Dropdown.Item eventKey="4" onSelect={()=>handleSelectslmrI(4)}>4</Dropdown.Item>
                                                <Dropdown.Item eventKey="5" onSelect={()=>handleSelectslmrI(5)}>5</Dropdown.Item>
                                            </DropdownButton>
                                            </Card>
                                            <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                                <Card.Title style={{fontSize: 15}}>Controls</Card.Title>
                                                <DropdownButton title={slmrC} id = "SLMRControls">
                                                    <Dropdown.Item eventKey="1" onSelect={()=>handleSelectslmrC(1)}>1</Dropdown.Item>
                                                    <Dropdown.Item eventKey="2" onSelect={()=>handleSelectslmrC(2)}>2</Dropdown.Item>
                                                    <Dropdown.Item eventKey="3" onSelect={()=>handleSelectslmrC(3)}>3</Dropdown.Item>
                                                    <Dropdown.Item eventKey="4" onSelect={()=>handleSelectslmrC(4)}>4</Dropdown.Item>
                                                    <Dropdown.Item eventKey="5" onSelect={()=>handleSelectslmrC(5)}>5</Dropdown.Item>
                                                </DropdownButton>
                                            </Card>
                                            <Card style={{borderColor: 'transparent', elevation: 0}}>
                                                <Card.Title style={{fontSize: 15}}>Residual</Card.Title>
                                                <Card.Text style={{ fontSize: 25 }}>
                                                    {Tool.getSLMRResidual()+1}
                                                </Card.Text>
                                            </Card>
                                        </CardGroup>
                                    </Card.Body>
                                    </Card>
                                </Card.Body>
                            </Card>
                            <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                                <Card.Body>
                                    <Card style={{ width: '21rem', height: '9rem' }} className="text-center" >
                                    <Card.Header as="h5" style={{fontSize: 17}}>Secondary LEF</Card.Header>
                                    <Card.Body>
                                        <CardGroup>
                                            <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                                <Card.Title style={{fontSize: 15}}>Inherent</Card.Title>
                                                <Card.Text style={{ fontSize: 25, backgroundColor: backgroundcolor }} >
                                                    {Tool.getSLEFInherent()+1}
                                                </Card.Text>
                                            </Card>
                                            <Card style={{borderColor: 'transparent', elevation: 0}}>

                                            </Card>
                                            <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                                <Card.Title style={{fontSize: 15}}>Residual</Card.Title>
                                                <Card.Text style={{ fontSize: 25 }}>
                                                    {Tool.getSLEFResidual()+1}
                                                </Card.Text>
                                            </Card>
                                        </CardGroup>
                                    </Card.Body>
                                    </Card>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Card>
                    <Card className="unindented-row" style={{borderColor: 'transparent', elevation: 0}}>
                        <CardGroup>
                            <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                                <Card.Body>
                                    <Card style={{ width: '21rem', height: '9rem' }} className="text-center" >
                                    <Card.Header as="h5" style={{fontSize: 17}}>Threat Event Frequency</Card.Header>
                                    <Card.Body>
                                        <CardGroup>
                                            <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                                <Card.Title style={{fontSize: 15}}>Inherent</Card.Title>
                                                <Card.Text style={{ fontSize: 25, backgroundColor: backgroundcolor }} >
                                                    {Tool.getTEFInherent()+1}
                                                </Card.Text>
                                            </Card>
                                            <Card style={{borderColor: 'transparent', elevation: 0}}>

                                            </Card>
                                            <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                                <Card.Title style={{fontSize: 15}}>Residual</Card.Title>
                                                <Card.Text style={{ fontSize: 25 }}>
                                                    {Tool.getTEFResidual()+1}
                                                </Card.Text>
                                            </Card>
                                        </CardGroup>
                                    </Card.Body>
                                    </Card>
                                </Card.Body>
                            </Card>
                            <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                                <Card.Body>
                                    <Card style={{ width: '21rem', height: '9rem' }} className="text-center" >
                                    <Card.Header as="h5" style={{fontSize: 17}}>Vulnerability</Card.Header>
                                    <Card.Body>
                                        <CardGroup>
                                            <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                                <Card.Title style={{fontSize: 15}}>Inherent</Card.Title>
                                                <Card.Text style={{ fontSize: 25, backgroundColor: backgroundcolor }} >
                                                    {Tool.getVULNInherent()+1}
                                                </Card.Text>
                                            </Card>
                                            <Card style={{borderColor: 'transparent', elevation: 0}}>

                                            </Card>
                                            <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                                <Card.Title style={{fontSize: 15}}>Residual</Card.Title>
                                                <Card.Text style={{ fontSize: 25 }}>
                                                    {Tool.getVULNResidual()+1}
                                                </Card.Text>
                                            </Card>
                                        </CardGroup>
                                    </Card.Body>
                                    </Card>
                                </Card.Body>
                            </Card>
                            <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                                <Card.Body>
                                    <Card style={{ width: '21rem', height: '9rem', borderColor: 'transparent', elevation: 0 }} className="text-center" ></Card>
                                </Card.Body>
                            </Card>
                            <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                                <Card.Body>
                                    <Card style={{ width: '21rem', height: '9rem', borderColor: 'transparent', elevation: 0 }} className="text-center" ></Card>
                                </Card.Body>
                            </Card>
                            <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                                <Card.Body>
                                    <Card style={{ width: '21rem', height: '9rem' }} className="text-center" >
                                    <Card.Header as="h5" style={{fontSize: 17}}>Secondary Loss Proabability</Card.Header>
                                    <Card.Body>
                                        <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                        <Card.Title style={{fontSize: 17}}>%</Card.Title>
                                        <DropdownButton title={slp} id = "SLP">
                                            <Dropdown.Item eventKey="1" onSelect={()=>handleSelectslp(1)}>1</Dropdown.Item>
                                            <Dropdown.Item eventKey="2" onSelect={()=>handleSelectslp(2)}>2</Dropdown.Item>
                                            <Dropdown.Item eventKey="3" onSelect={()=>handleSelectslp(3)}>3</Dropdown.Item>
                                            <Dropdown.Item eventKey="4" onSelect={()=>handleSelectslp(4)}>4</Dropdown.Item>
                                            <Dropdown.Item eventKey="5" onSelect={()=>handleSelectslp(5)}>5</Dropdown.Item>
                                        </DropdownButton>
                                        </Card>
                                    </Card.Body>
                                    </Card>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Card>
                    <Card className="indented-row" style={{borderColor: 'transparent', elevation: 0}}>
                        <CardGroup>
                            <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                                <Card.Body>
                                    <Card style={{ width: '21rem', height: '9rem' }} className="text-center">
                                    <Card.Header as="h5" style={{fontSize:17}}>Control Frequency Avoidance</Card.Header>
                                    <Card.Body>
                                        <CardGroup>
                                            <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                            <Card.Title style={{fontSize: 15}}>Inherent</Card.Title>
                                            <DropdownButton title={cfaI} id = "CFAInherent" className='button'>
                                                <Dropdown.Item eventKey="1" onSelect={()=>handleSelectcfaI(1)}>1</Dropdown.Item>
                                                <Dropdown.Item eventKey="2" onSelect={()=>handleSelectcfaI(2)}>2</Dropdown.Item>
                                                <Dropdown.Item eventKey="3" onSelect={()=>handleSelectcfaI(3)}>3</Dropdown.Item>
                                                <Dropdown.Item eventKey="4" onSelect={()=>handleSelectcfaI(4)}>4</Dropdown.Item>
                                                <Dropdown.Item eventKey="5" onSelect={()=>handleSelectcfaI(5)}>5</Dropdown.Item>
                                            </DropdownButton>
                                            </Card>
                                            <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                                <Card.Title style={{fontSize: 15}}>Controls</Card.Title>
                                                <DropdownButton title={cfaC} id = "CFAControls">
                                                    <Dropdown.Item eventKey="1" onSelect={()=>handleSelectcfaC(1)}>1</Dropdown.Item>
                                                    <Dropdown.Item eventKey="2" onSelect={()=>handleSelectcfaC(2)}>2</Dropdown.Item>
                                                    <Dropdown.Item eventKey="3" onSelect={()=>handleSelectcfaC(3)}>3</Dropdown.Item>
                                                    <Dropdown.Item eventKey="4" onSelect={()=>handleSelectcfaC(4)}>4</Dropdown.Item>
                                                    <Dropdown.Item eventKey="5" onSelect={()=>handleSelectcfaC(5)}>5</Dropdown.Item>
                                                </DropdownButton>
                                            </Card>
                                            <Card style={{borderColor: 'transparent', elevation: 0}}>
                                                <Card.Title style={{fontSize: 15}}>Residual</Card.Title>
                                                <Card.Text style={{ fontSize: 25 }}>
                                                    {Tool.getCFAResidual()+1}
                                                </Card.Text>
                                            </Card>
                                        </CardGroup>
                                    </Card.Body>
                                    </Card>
                                </Card.Body>
                            </Card>
                            <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                                <Card.Body>
                                    <Card style={{ width: '21rem', height: '9rem' }} className="text-center">
                                    <Card.Header as="h5" style={{fontSize: 17}}>Threat Capability</Card.Header>
                                    <Card.Body>
                                        <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                        <Card.Title style={{fontSize: 15}}>OWASP</Card.Title>
                                        <DropdownButton title={tc} id = "TC">
                                            <Dropdown.Item eventKey="1" onSelect={()=>handleSelecttc(1)}>1</Dropdown.Item>
                                            <Dropdown.Item eventKey="2" onSelect={()=>handleSelecttc(2)}>2</Dropdown.Item>
                                            <Dropdown.Item eventKey="3" onSelect={()=>handleSelecttc(3)}>3</Dropdown.Item>
                                            <Dropdown.Item eventKey="4" onSelect={()=>handleSelecttc(4)}>4</Dropdown.Item>
                                            <Dropdown.Item eventKey="5" onSelect={()=>handleSelecttc(5)}>5</Dropdown.Item>
                                        </DropdownButton>
                                        </Card>
                                    </Card.Body>
                                    </Card>
                                </Card.Body>
                            </Card>
                            <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                                <Card.Body>
                                    <Card style={{ width: '21rem', height: '9rem', borderColor: 'transparent', elevation: 0 }} className="text-center" ></Card>
                                </Card.Body>
                            </Card>
                            <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                                <Card.Body>
                                    <Card style={{ width: '21rem', height: '9rem', borderColor: 'transparent', elevation: 0 }} className="text-center" ></Card>
                                </Card.Body>
                            </Card>
                            <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                                <Card.Body>
                                    <Card style={{ width: '21rem', height: '9rem' }} className="text-center" >
                                    <Card.Header as="h5" style={{fontSize: 17}}>Primary Loss Event Frequency</Card.Header>
                                    <Card.Body>
                                        <CardGroup>
                                            <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                                <Card.Title style={{fontSize: 15}}>Inherent</Card.Title>
                                                <Card.Text style={{ fontSize: 25, backgroundColor: backgroundcolor }} >
                                                    {Tool.getPLEFInherent()+1}
                                                </Card.Text>
                                            </Card>
                                            <Card style={{borderColor: 'transparent', elevation: 0}}>

                                            </Card>
                                            <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                                <Card.Title style={{fontSize: 15}}>Residual</Card.Title>
                                                <Card.Text style={{ fontSize: 25 }}>
                                                    {Tool.getPLEFResidual()+1}
                                                </Card.Text>
                                            </Card>
                                        </CardGroup>
                                    </Card.Body>
                                    </Card>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Card>
                    <Card className="indented-row" style={{borderColor: 'transparent', elevation: 0}}>
                        <CardGroup>
                            <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                                <Card.Body>
                                    <Card style={{ width: '21rem', height: '9rem' }} className="text-center">
                                        <Card.Header as="h5" style={{fontSize:14}}>Probability of Action Deterrence</Card.Header>
                                        <Card.Body>
                                            <CardGroup>
                                                <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                                <Card.Title style={{fontSize: 15}}>Inherent</Card.Title>
                                                    <DropdownButton title={padI} id = "PADInherent" >
                                                        <Dropdown.Item eventKey="1" onSelect={()=>handleSelectpadI(1)}>1</Dropdown.Item>
                                                        <Dropdown.Item eventKey="2" onSelect={()=>handleSelectpadI(2)}>2</Dropdown.Item>
                                                        <Dropdown.Item eventKey="3" onSelect={()=>handleSelectpadI(3)}>3</Dropdown.Item>
                                                        <Dropdown.Item eventKey="4" onSelect={()=>handleSelectpadI(4)}>4</Dropdown.Item>
                                                        <Dropdown.Item eventKey="5" onSelect={()=>handleSelectpadI(5)}>5</Dropdown.Item>
                                                    </DropdownButton>
                                                </Card>
                                                <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                                    <Card.Title style={{fontSize: 15}}>Controls</Card.Title>
                                                    <DropdownButton title={padC} id = "PADControls" >
                                                        <Dropdown.Item eventKey="1" onSelect={()=>handleSelectpadC(1)}>1</Dropdown.Item>
                                                        <Dropdown.Item eventKey="2" onSelect={()=>handleSelectpadC(2)}>2</Dropdown.Item>
                                                        <Dropdown.Item eventKey="3" onSelect={()=>handleSelectpadC(3)}>3</Dropdown.Item>
                                                        <Dropdown.Item eventKey="4" onSelect={()=>handleSelectpadC(4)}>4</Dropdown.Item>
                                                        <Dropdown.Item eventKey="5" onSelect={()=>handleSelectpadC(5)}>5</Dropdown.Item>`
                                                    </DropdownButton>
                                                </Card>
                                                <Card style={{borderColor: 'transparent', elevation: 0}}>
                                                    <Card.Title style={{fontSize: 15}}>Residual</Card.Title>
                                                    <Card.Text style={{ fontSize: 25 }}>
                                                        {Tool.getPADResidual()+1}
                                                    </Card.Text>
                                                </Card>
                                            </CardGroup>
                                        </Card.Body>
                                    </Card>
                                </Card.Body>
                            </Card>
                            <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                                <Card.Body>
                                    <Card style={{ width: '21rem', height: '9rem' }} className="text-center" >
                                    <Card.Header as="h5" style={{fontSize:14}}>Resistance Strength Vulnerability</Card.Header>
                                        <Card.Body>
                                            <CardGroup>
                                                <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                                <Card.Title style={{fontSize: 15}}>Inherent</Card.Title>
                                                <DropdownButton title={rsI} id = "RSInherent">
                                                    <Dropdown.Item eventKey="1" onSelect={()=>handleSelectrsI(1)}>1</Dropdown.Item>
                                                    <Dropdown.Item eventKey="2" onSelect={()=>handleSelectrsI(2)}>2</Dropdown.Item>
                                                    <Dropdown.Item eventKey="3" onSelect={()=>handleSelectrsI(3)}>3</Dropdown.Item>
                                                    <Dropdown.Item eventKey="4" onSelect={()=>handleSelectrsI(4)}>4</Dropdown.Item>
                                                    <Dropdown.Item eventKey="5" onSelect={()=>handleSelectrsI(5)}>5</Dropdown.Item>
                                                </DropdownButton>
                                                </Card>
                                                <Card style={{borderColor: 'transparent', elevation: 0}} className="text-center">
                                                    <Card.Title style={{fontSize: 15}}>Controls</Card.Title>
                                                    <DropdownButton title={rsC} id = "RSControls">
                                                        <Dropdown.Item eventKey="1" onSelect={()=>handleSelectrsC(1)}>1</Dropdown.Item>
                                                        <Dropdown.Item eventKey="2" onSelect={()=>handleSelectrsC(2)}>2</Dropdown.Item>
                                                        <Dropdown.Item eventKey="3" onSelect={()=>handleSelectrsC(3)}>3</Dropdown.Item>
                                                        <Dropdown.Item eventKey="4" onSelect={()=>handleSelectrsC(4)}>4</Dropdown.Item>
                                                        <Dropdown.Item eventKey="5" onSelect={()=>handleSelectrsC(5)}>5</Dropdown.Item>
                                                    </DropdownButton>
                                                </Card>
                                                <Card style={{borderColor: 'transparent', elevation: 0}}>
                                                    <Card.Title style={{fontSize: 15}}>Residual</Card.Title>
                                                    <Card.Text style={{ fontSize: 25 }}>
                                                        {Tool.getRSResidual()+1}
                                                    </Card.Text>
                                                </Card>
                                            </CardGroup>
                                        </Card.Body>
                                    </Card>
                                </Card.Body>
                            </Card>
                            <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                                <Card.Body>
                                    <Card style={{ width: '21rem', height: '9rem', borderColor: 'transparent', elevation: 0 }} className="text-center" ></Card>
                                </Card.Body>
                            </Card>
                            <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                                <Card.Body>
                                    <Card style={{ width: '21rem', height: '9rem', borderColor: 'transparent', elevation: 0 }} className="text-center" ></Card>
                                </Card.Body>
                            </Card>
                            <Card style={{ borderColor: 'transparent', elevation: 0 }}>
                                <Card.Body>
                                    <Card style={{ width: '21rem', height: '9rem', borderColor: 'transparent', elevation: 0 }} className="text-center" >
                                    <Button onClick = {handleSubmit} disabled={buttonDisabled || buttonDisabled2 || buttonDisabled3 || buttonDisabled4 || buttonDisabled5 || buttonDisabled6 || buttonDisabled7 || buttonDisabled8 || buttonDisabled9 || buttonDisabled10 || buttonDisabled11 || buttonDisabled12
                                                              || textbool1 || textbool2 || textbool3 || textbool4 || textbool5 || textbool6}
                                    variant={'success'}
                                    >Submit</Button>
                                    </Card>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Card>
              </Col>
            </Row>
          </Col>
          <Col>
            <Container fluid>
              <Row>
                <Col>
                  <Table striped bordered>
                    <thead>
                      <tr>
                        <th>Summary</th>
                        <th>Inherent</th>
                        <th>Residual</th>
                       </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Overall Risk</td>
                        <td>{convertToOutputText(Tool.getORInherent())}</td>
                        <td>{convertToOutputText(Tool.getORResidual())}</td>
                      </tr>
                      <tr>
                        <td>Primary LM</td>
                        <td>{convertToMoney(Tool.getPLMRInherent())}</td>
                        <td>{convertToMoney(Tool.getPLMRResidual())}</td>
                      </tr>
                      <tr>
                        <td>Secondary LM</td>
                        <td>{convertToMoney(Tool.getSLMRInherent())}</td>
                        <td>{convertToMoney(Tool.getSLMRResidual())}</td>
                      </tr>
                    </tbody>
                  </Table>
                <Row>
                  <Col>
                    <ListGroup variant="flush" style={{fontSize:12}}>
                      <ListGroup.Item style={{fontWeight: 'bold', padding: 6}}>Loss Magnitude</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>1. &#60;$9,999</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>2. $10,000 - $99,999</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>3. $100,000 - $999,999</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>4. $1,000,000 - $9,999,999</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>5. &#62;=$10,000,000</ListGroup.Item>
                    </ListGroup>
                    <br/>
                    <ListGroup variant="flush" style={{fontSize:12}}>
                      <ListGroup.Item style={{fontWeight: 'bold', padding: 6}}>Contact Frequency</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>1. &#60;0.1 times per year</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>2. 0.1 - 1 times per year</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>3. 1 - 10 times per year</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>4. 10 - 100 times per year</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>5. &#62;100 times per year</ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <Col>
                    <ListGroup variant="flush"  style={{fontSize:12}}>
                      <ListGroup.Item style={{fontWeight: 'bold', padding: 6}}>Probability</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>1. 0% - 10%</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>2. 10% - 30%</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>3. 30% - 70%</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>4. 70% - 90%</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>5. 90% - 100%</ListGroup.Item>
                    </ListGroup>
                    <br/>
                    <ListGroup variant="flush" style={{fontSize:12}}>
                      <ListGroup.Item style={{fontWeight: 'bold', padding: 6}}>Threat Capability</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>1. No technical skills</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>2. Some technical skills</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>3. Advanced computer user</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>4. Network and programming skills</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>5. Security penetration skills</ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <ListGroup variant="flush" style={{fontSize:12}}>
                      <ListGroup.Item style={{fontWeight: 'bold'}}>Resistance Strength</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>1. Only protects against bottom 2% of an average threat population</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>2. Only protects against bottom 16% of an average threat population</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>3. Protects against the average threat agent</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>4. Protects against all but the top 16% of an average threat population</ListGroup.Item>
                      <ListGroup.Item style={{padding: 6}}>5. Protects against all but the top 2% of an average threat population</ListGroup.Item>
                    </ListGroup>
                  </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
    );
}
