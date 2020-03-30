import styled from 'styled-components'; //css
import Add from '../img/add.svg';
import AddActive from '../img/add-active.svg';

const StyledPlus = styled.div`

    background-image: url('${Add}');
    background-repeat: no-repeat;
    background-size:contain;
    background-position:center;

    position:relative;
    width:25px;
    height:25px;
    padding: 0 5px 0 15px;
    z-index:1;

    ::after{
        background-image: url('${AddActive}');
        background-repeat: no-repeat;
        background-size:contain;
        background-position:center;
        
        transition: opacity 500ms;
        z-index:-1;
        content:"";
        position:absolute;
        top:0;
        right:0;
        bottom:0;
        left:0;
        opacity:0;
       
    }
`;

export default StyledPlus;
