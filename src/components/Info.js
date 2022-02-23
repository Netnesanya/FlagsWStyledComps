import React from 'react';
import styled from "styled-components";

const Wrapper = styled.section``


const InfoImage = styled.img``


const InfoTitle = styled.h1``

const ListGroup = styled.div``

const List = styled.ul``

const ListItem = styled.li``



const Info = (props) => {
    const {
        name,
        nativeName,
        flag,
        capital,
        population,
        region,
        subregion,
        topLevelDomain,
        currencies = [],
        languages = [],
        borders = []
    } = props



    return (
        <Wrapper>
            <InfoImage />
            <div>
                <InfoTitle>

                </InfoTitle>
                <ListGroup>
                    <List>
                        <ListItem>
                            <b>Native Name:</b> {nativeName}
                        </ListItem>
                          <ListItem>
                            <b>Population:</b> {population}
                        </ListItem>
                          <ListItem>
                            <b>Region:</b> {region}
                        </ListItem>
                          <ListItem>
                            <b>Sub Region:</b> {subregion}
                        </ListItem>
                          <ListItem>
                            <b>Capital:</b> {capital}
                        </ListItem>
                          <ListItem>
                            <b>Top Level Domain:</b> {topLevelDomain.map(el => (<span key={el}>el</span>))}
                        </ListItem>
                          <ListItem>
                            <b>Native Name:</b> {nativeName}
                        </ListItem>
                                              <ListItem>
                            <b>Native Name:</b> {nativeName}
                        </ListItem>
                                              <ListItem>
                            <b>Native Name:</b> {nativeName}
                        </ListItem>
                                              <ListItem>
                            <b>Native Name:</b> {nativeName}
                        </ListItem>
                    </List>
                    <List>

                    </List>
                </ListGroup>
            </div>
        </Wrapper>
    );
};

export default Info;