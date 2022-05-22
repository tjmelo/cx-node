import * as express from 'express'

express()
    .get('/about', (req, res, next) => {})
    .post('/contact', (req, res, next) => {})
    .put('/send', (req, res, next) => {})
    .put('/delete', (req, res, next) => {})
    //Same behaviour for all
    .all('/delete', (req, res, next) => {})