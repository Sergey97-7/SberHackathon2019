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
  List,
  Select
} from "semantic-ui-react";
import NetWorkCard from "./NetworkCard";
class CurrentUserStatus extends Component {
  render() {
    const countryOptions = [{ key: "af", value: "af", text: "Afghanistan" }];
    const cards = [
      {
        name: " сеть1",
        ip4: "10.68.198.94",
        ip6: "fe80::250:56ff:fe85:5dcd",
        bssid: "BSSID1",
        channel: "12",
        update: new Date()
      },
      {
        name: " сеть2",
        ip4: "10.68.198.94",
        ip6: "fe80::250:56ff:fe85:5dcd",
        bssid: "BSSID1",
        channel: "12",
        update: new Date()
      },
      {
        name: " сеть3",
        ip4: "10.68.198.94",
        ip6: "fe80::250:56ff:fe85:5dcd",
        bssid: "BSSID1",
        channel: "12",
        update: new Date()
      },
      {
        name: " сеть4",
        ip4: "10.68.198.94",
        ip6: "fe80::250:56ff:fe85:5dcd",
        bssid: "BSSID1",
        channel: "12",
        update: new Date()
      },
      {
        name: " сеть5",
        ip4: "10.68.198.94",
        ip6: "fe80::250:56ff:fe85:5dcd",
        bssid: "BSSID1",
        channel: "12",
        update: new Date()
      },
      {
        name: " сеть6",
        ip4: "10.68.198.94",
        ip6: "fe80::250:56ff:fe85:5dcd",
        bssid: "BSSID1",
        channel: "12",
        update: new Date()
      },
      {
        name: " сеть7",
        ip4: "10.68.198.94",
        ip6: "fe80::250:56ff:fe85:5dcd",
        bssid: "BSSID1",
        channel: "12",
        update: new Date()
      }
    ];
    return (
      <div className="current-user-status">
        <Segment className="tts">
          <Header block={true} as="h4">
            История запросов
          </Header>
          <Select  placeholder="Время" options={countryOptions} />
        </Segment>
        <Segment>
          <Header  block={true} as="h4">
            Статус устройства
          </Header>
          <List className="text-left" divided selection>
            <List.Item>
              <Label color="green" horizontal>
                Пользователь
              </Label>
              user1@sberbank.ru
            </List.Item>
            <List.Item>
              <Label color="purple" horizontal>
                MAC
              </Label>
              00:50:56:85:5d:cd
            </List.Item>
            <List.Item>
              <Label color="red" horizontal>
                ID устройства
              </Label>
              r4t48uergh48834hrgg
            </List.Item>
            <List.Item>
              <Label color="yellow" horizontal>
                Параметр
              </Label>
              Параметр
            </List.Item>
          </List>
        </Segment>
        <Segment>
          <Header  block={true} as="h4">
            Список сетей
          </Header>
          <div className="grid-test">
            {cards.map(card => {
              return (
                <NetWorkCard
                  key={card.name}
                  name={card.name}
                  ip4={card.ip4}
                  ip6={card.ip6}
                  bssid={card.bssid}
                  channel={card.channel}
                  update={card.update}
                />
              );
            })}
          </div>
        </Segment>
      </div>
    );
  }
}
export default CurrentUserStatus;
