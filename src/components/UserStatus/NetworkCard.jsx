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
            {name}
          </List.Item>
          <List.Item>
            <Label color="black" horizontal>
              IP4
            </Label>
            {ip4}
          </List.Item>
          <List.Item>
            <Label color="black" horizontal>
              IP6
            </Label>
            {ip6}
          </List.Item>
          <List.Item>
            <Label color="black" horizontal>
              BSSID:
            </Label>
            {bssid}
          </List.Item>
          <List.Item>
            <Label color="black" horizontal>
              Channel
            </Label>
            {channel}
          </List.Item>
          <List.Item>
            <Label color="black" horizontal>
              Обновлено
            </Label>
            {moment(update).format("MM Do YYYY, hh:mm:ss")}
          </List.Item>
        </List>
      </Segment>
    );
  }
}
export default NetworkCard;
