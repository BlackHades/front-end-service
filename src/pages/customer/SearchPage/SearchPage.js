import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SearchBar from '../../components/SearchBar/SearchBar';
import FilterBar from '../../components/FilterBar/FilterBar';
import ServiceInfo from '../../components/ServiceInfo/ServiceInfo';
import './searchpage.css'

function SearchPage() {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col>
                        <SearchBar ></SearchBar>
                        <FilterBar ></FilterBar>
                    </Col>
                </Row>

                // render info based on how many is available
                <Row>
                    <Col>
                        <ServiceInfo></ServiceInfo>
                    </Col>
                </Row>



            </Container>
        </React.Fragment>
    );
}

export default SearchPage;
