import express from 'express'
import { createPersons, deletePersons, getAllPersons, getPersons, updatePersons } from '../controllers/controller.js'

const router =  express.Router()

router.get('/',getAllPersons)
router.get('/:id',getPersons)
router.post('/',createPersons)
router.put('/:id',updatePersons)
router.delete('/:id',deletePersons)


export default router
