import React from 'react'
import { Link } from 'react-router-dom'
import profileimg from '../img/dprofile.png'
import {Dropdown,DropdownButton} from 'react-bootstrap'

export default function Test() {
  return (
    <>
    <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    </>
  )
}
