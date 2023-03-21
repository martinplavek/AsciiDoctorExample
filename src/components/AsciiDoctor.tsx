import React from "react";
import { readAsciiDocFile } from "../utils/asciiDocFileReader";
import { Parser } from 'html-to-react'

export const AsciiDoctor = () => {
    const parser = new Parser()

  const htmlContent = readAsciiDocFile()
    console.log('htmlContent', htmlContent)
  return <>{parser.parse(htmlContent)}</>
};