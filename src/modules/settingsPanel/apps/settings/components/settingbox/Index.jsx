import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from "react-redux";
import { ReactSVG } from 'react-svg';
import Sidebar from "./overview/Sidebar.jsx";
import SettingContent from "./overview/SettingContent.jsx";
import File from 'Assets/svg/icons/file.svg';
import Link from 'Assets/svg/icons/link.svg';
import QuestonCircle from 'Assets/svg/icons/question-circle.svg';
import { SetingBoxWrap } from './Style';
import api from '../../helpers/api';


const SettingBox = () => {

    const [optionState, setOptionState] = useState({
		clintID: [],
		nativeLogin: true,
		excludedPages:[],
		excludedSingle:[],
		subscriber: 'subscriber',
		loader: false,
        autoSignIn: true,
        redirectUrl: '',
        context: 'signin',
        cancelOnTapOutside: false,
        parentDomain: '',
        delay: '',
        pdateExistingUser: false,
	});
    const { loader } = optionState;


    const formHandler = async (e) => {   
        e.preventDefault();
        setOptionState({
			...optionState,
			loader: true
		});
        try {
            let response = await api.updateOptions( optionState );
            setOptionState({
                ...optionState,
                loader: 'success'
            });
            setTimeout(() => {
                setOptionState({
                    ...optionState,
                    loader: false
                });
            }, 1000);
            // dispatch( submitFormSuccess( result ) );
        } catch (error) {
            setOptionState({
                ...optionState,
                loader: 'failed'
            });
            setTimeout(() => {
                setOptionState({
                    ...optionState,
                    loader: false
                });
            }, 1000);           
            // dispatch( submitFormError( error.response.data ) );
        }

    }
    return (
        <SetingBoxWrap>
            <div className="onetap-settings-top">
                <h2 className="onetap-settings-top__title">oneTap</h2>
                <div className="onetap-settings-top__links">
                    <a href="https://exlac.com/documentation/" target="_blank">
                        <div className="onetap-settings-top__link-icon"><ReactSVG src={File} /></div>
                        <span className="onetap-settings-top__link-text">Documentation </span>
                    </a>
                    <a href="https://exlac.com/contact-us/" target="_blank">
                        <div className="onetap-settings-top__link-icon"><ReactSVG src={QuestonCircle} /></div>
                        <span className="onetap-settings-top__link-text">Support </span>
                    </a>
                    <a href="https://exlac.com/product/onetap/" className='onetop-proLink'>
                        <div className="onetap-settings-top__link-icon"><ReactSVG src={Link} /></div>
                        <span className="onetap-settings-top__link-text">Go Pro </span>
                    </a>
                </div>
            </div>
            <div className="exlac-vm-seetings-box">
                <div className="exlac-vm-seetings-box__header">
                    <div className="exlac-vm-seetings-box__breadcrumb">
                        <ul>
                            <li><a href="#">Version - 1.0</a></li>
                        </ul>
                    </div>
                    <div className="exlac-vm-seetings-box__actions">
                        <span className='exlac-vm-notice'>{ loader === 'success' ? 'Saved successfuly!' : ( loader === 'failed' ? 'Failed! please try again' : '')}</span>
                        <a href="" onClick={formHandler} className="exlac-vm-btn exlac-vm-btn-sm exlac-vm-btn-primary">{!loader ? 'Save Changes' : 'Saving...'}</a>
                    </div>
                </div>
                <div className="exlac-vm-seetings-box__body">
                    {/* <Sidebar /> */}
                    <SettingContent optionState={optionState} setOptionState={setOptionState} />
                </div>
                <div className="exlac-vm-seetings-box__footer">
                    <span className='exlac-vm-notice'>{ loader === 'success' ? 'Saved successfuly!' : ( loader === 'failed' ? 'Failed! please try again' : '')}</span>
                    <a href="" onClick={formHandler} className="exlac-vm-btn exlac-vm-btn-sm exlac-vm-btn-primary">{!loader ? 'Save Changes' : 'Saving...'}</a>
                </div>
            </div>
        </SetingBoxWrap>
    );
}
export default SettingBox;