/**@jsx jsx*/
import {css, jsx} from "@emotion/core";
import {Fragment, useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {filterType as allFilterTypes} from "../../../TableGrid/constants/filters";
import {useContext} from "react";
import {DropdownContext} from "../../ContextProvider";
import SettingsIcon from "../../components/SettingsIcon";

const SimpleSearch = ({filterType}) => {
    const label = allFilterTypes[filterType].filterName ? allFilterTypes[filterType].filterName : allFilterTypes[filterType].label
    const {bdColor, fontRatio, onChangeSimpleSearch} = useContext(DropdownContext)
    const [value, setValue] = useState('')
    const onChangeHandler = (e) => setValue(e.target.value)
    useEffect(() => onChangeSimpleSearch(value), [value])
    return (
        <Fragment>
            <div className="d-flex justify-content-between align-items-center" css={css`
                border-bottom: 1px solid ${bdColor};
                padding-right: 0.5rem;
            `}>
                <div css={css`
                    padding-left: 5px;
                `}>
                    <span className="font-weight-bold">{label}</span>:
                </div>
                <SettingsIcon />
            </div>

            <div css={css`
            padding: 5px;
            position: relative;
        `} className="d-flex justify-content-between align-items-center" >
                <input type="text" className="form-control shadow-none" css={css`
                font-size: ${fontRatio}rem;
                padding: 0.2rem;
                padding-right: 2rem;
                height: calc(1.5em + 2px);
                &:focus {
                  border-color: ${bdColor};
                }
            `} value={value} onChange={onChangeHandler} autoFocus={true} />
            </div>
        </Fragment>
    )
}
SimpleSearch.propTypes = {
    filterType: PropTypes.string,
}
SimpleSearch.defaultProps = {
}

export default SimpleSearch