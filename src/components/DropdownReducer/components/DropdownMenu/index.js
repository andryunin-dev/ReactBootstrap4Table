/**@jsx jsx*/
import {DropdownMenu as DropdownMenuBs} from "reactstrap"
import {css, jsx} from "@emotion/core"
import PropTypes from 'prop-types'
import {DropdownContext} from "../../ContextProvider";
import {useContext} from "react";

const DropdownMenu = (props) => {
    const {fontRatio, maxWidth} = useContext(DropdownContext)
    return (
        <DropdownMenuBs css={css`
            top: -5px !important;
            left: 5px !important;
            font-size: ${fontRatio}rem;
            padding: 0;
            max-width: ${maxWidth}px;
        `} {...props} >
            {props.children}
        </DropdownMenuBs>
    )
}
DropdownMenu.propTypes = {
    ...DropdownMenuBs.propTypes,
    fontRatio: PropTypes.number,
    maxWidth: PropTypes.number
}
export default DropdownMenu
