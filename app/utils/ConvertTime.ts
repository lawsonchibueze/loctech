import React from 'react'

export default function convertTime(duration:number| undefined) {
 const hours = Math.floor(duration!/3600)
 const minutes = Math.floor((duration!%3600)/60)


    return hours
}
