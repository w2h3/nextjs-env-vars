import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

export const config = { matcher: '/' };

export async function middleware() {
  const greeting = await get('greeting');
  return NextResponse.json(greeting);
}
