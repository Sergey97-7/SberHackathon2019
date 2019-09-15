import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Container,
  Input,
  Icon,
  Label,
  Menu,
  Table,
  List
} from "semantic-ui-react";
import moment from "moment";
class NetworkCard extends Component {
  render() {
    const { name, ip4, ip6, bssid, channel, update } = this.props;
    return (
      <Segment>
        <List className="text-left" divided selection>
          <List.Item>
            <Label color="black" horizontal>
              Имя сети
            </Label>
            сеть1
          </List.Item>
          <List.Item>
            <Label color="black" horizontal>
              IP4
            </Label>
            10.68.198.94
          </List.Item>
          <List.Item>
            <Label color="black" horizontal>
              IP6
            </Label>
            fe80::250:56ff:fe85:5dcd
          </List.Item>
          <List.Item>
            <Label color="black" horizontal>
              BSSID:
            </Label>
            BSSID1
          </List.Item>
          <List.Item>
            <Label color="black" horizontal>
              Channel
            </Label>
            12
          </List.Item>
          <List.Item>
            <Label color="black" horizontal>
              Обновлено
            </Label>
            {moment(new Date()).format("MM Do YYYY, hh:mm:ss")}
          </List.Item>
        </List>
      </Segment>
    );
  }
}
export default NetworkCard;
