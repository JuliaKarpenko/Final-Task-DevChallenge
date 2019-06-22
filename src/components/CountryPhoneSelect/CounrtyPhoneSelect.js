import React, { Component } from 'react';
import Flag from '../Flag/Flag';
import Input from '../Input/Input';
import CoutryList from '../CountryList/CountryList';
import s from './CounrtyPhoneSelect.module.css';
import allCountries from '../../assets/data';
// import allCountryCodes  from '../../assets/data';


export default class CountryPhoneSelect extends Component {

    state={
        isOpen: false
    }

    containerRef = React.createRef();

    componentDidMount() {
        window.addEventListener('click', this.handleWindowClick);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.handleWindowClick);
    }

    handleWindowClick = (e) => {
        const isTargetInsideContainer = this.containerRef.current.contains(e.target);
        const { isOpen } = this.state;
        if (isOpen && !isTargetInsideContainer) {
            this.handleOpen();
        }
    }
    
    handleOpen= () => {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }

    render() {
       const {isOpen} = this.state;
      return (
        <div className={s.container} >
            <div ref={this.containerRef}>
                <h3>All countries</h3>
                <div className={s.inputBlock} onClick={this.handleOpen}>
                    <Flag/>
                    <Input  allCountries={allCountries} isOpen={isOpen}/>
                </div>
            </div>
            <div>
                <h3>Selected countries, localization</h3>
                <div className={s.inputBlock} onClick={this.handleOpen}>
                    <Flag/>
                    <Input/>
                    {/* <CoutryList allCountries={allCountries} isOpen={isOpen}/> */}
                </div>

            </div>
        </div>
      );
    }
  }
