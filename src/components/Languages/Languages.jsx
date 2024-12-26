import "./Languages.scss"

import axios from "../../assets/icons/axios.svg"
import css from "../../assets/icons/css.svg"
import express from "../../assets/icons/express.svg"
import git from "../../assets/icons/git.svg"
import github from "../../assets/icons/github.svg"
import heroku from "../../assets/icons/heroku.svg"
import html from "../../assets/icons/html.svg"
import jest from "../../assets/icons/jest.svg"
import js from "../../assets/icons/javascript.svg"
import json from "../../assets/icons/json.svg"
import knex from "../../assets/icons/knex.svg"
import mysql from "../../assets/icons/mysql.svg"
import node from "../../assets/icons/node.svg"
import npm from "../../assets/icons/npm.svg"
import postman from "../../assets/icons/postman.svg"
import python from "../../assets/icons/python.svg"
import react from "../../assets/icons/react.svg"
import ruby from "../../assets/icons/ruby.svg"
import socketio from "../../assets/icons/socketio.svg"
import ts from "../../assets/icons/typescript.svg"

const Languages = () => {
    return ( 
        <div className="language">
            <div className="language__current-skills">
                <h3 className="language__current-title">Current skills:</h3>
                <div className="language__icon-list">
                    <img className="language__icon" src={axios} alt= "axios logo"/>
                    <img className="language__icon" src={css} alt= "css logo"/>
                    <img className="language__icon" src={express} alt= "express logo"/>
                    <img className="language__icon" src={git} alt= "git logo"/>
                    <img className="language__icon" src={github} alt= "github logo"/>
                    <img className="language__icon" src={heroku} alt= "heroku logo"/>
                    <img className="language__icon" src={html} alt= "html logo"/>
                    <img className="language__icon" src={js} alt="javascript logo"/>
                    <img className="language__icon" src={jest} alt="jest logo"/>
                    <img className="language__icon" src={json} alt="json logo"/>
                    <img className="language__icon" src={knex} alt="knex logo"/>
                    <img className="language__icon" src={mysql} alt="mysql logo"/>
                    <img className="language__icon" src={node} alt="node logo"/>
                    <img className="language__icon" src={npm} alt="npm logo"/>
                    <img className="language__icon" src={postman} alt="postman logo"/>
                    <img className="language__icon" src={python} alt="python logo"/>
                    <img className="language__icon" src={react} alt="react logo"/>
                    <img className="language__icon" src={socketio} alt="socket-io logo"/>
                    <img className="language__icon" src={ts} alt="typescript logo"/>
                </div>
            </div>
            <div className="language__working-skills">
                <h3 className="language__working-title">Skills in Progress:</h3>
                <div className="language_icon-list">
                    <img className="language__icon" src={ruby} alt= "ruby logo"/>
                </div>
            </div>
        </div>
     );
}
 
export default Languages;