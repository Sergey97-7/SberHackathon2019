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
class NetworkCard extends Component {
  render() {
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
            Thu Sep 5 10:47:24 MSK 2019
          </List.Item>
        </List>
      </Segment>
    );
  }
}
export default NetworkCard;
