import styled from "styled-components";


export const AlbumStyle = styled.div`
    

    #container {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 20px;

        .imgs {
            padding: 20px;
            border: 1px solid black;
            cursor: pointer;
        }
    }

`