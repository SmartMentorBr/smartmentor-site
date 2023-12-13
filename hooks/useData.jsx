'use server'

/* import yaml config */
import yaml from 'js-yaml'
import fs from 'fs'

export default async () => await yaml.load(fs.readFileSync("data/main.yaml", 'utf8'))