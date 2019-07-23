import Layouts from '../components/Layouts'
import { Carousel, Card, Row, Col, Rate } from 'antd'
import React,{Component} from "react";


class About extends Component{
    render() {
        return (
            <div>
                <Layouts>
                    <div>
                      <Row gutter={24}>
                        <Col span={12}>
                          <h1>ABOUT ME</h1><hr/>
                          <p>
                            <span>I am a student from Khon Kaen University, Nong Khai Campus. I have to learn new things and use them to develop myself. I will
          try my best to complete the task.</span>
                          </p><br/><br/>
                          <h1>History</h1><hr/>
                          <p>
                            <b>NAME : </b> <span>Phongsakon   Kanphakdi</span>
                          </p>
                          <p>
                            <b>NICKNAME : </b> <span>PALM</span>
                          </p>
                          <p>
                            <b>AGE : </b> <span>22 Year Old</span>
                          </p>
                          <p>
                            <b>Address : </b> <span> 35/1 Moo 2, Tambon Lamphu Mueng District Nongbua Lamphu</span>
                          </p>
                          <br/><br/>
                        </Col>
                      </Row>
                    </div>
                </Layouts>
            </div>
        )
    }
}

export default About