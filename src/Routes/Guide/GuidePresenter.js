import React from 'react';
import { Link } from 'react-router-dom';
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from 'react-scroll-motion';
import Button from '../../Components/Button';

const GuidePresenter = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky(), MoveOut(0, -200));

  return (
    <div style={{ background: '#B4D8E7' }}>
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <span style={{ fontSize: '30px', fontWeight: 'bold' }}>
              Welcome to Flavoice 😀
            </span>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '20px',
                  textAlign: 'center',
                  marginTop: '50%',
                  fontWeight: 'bold',
                }}
              >
                Please Scroll Down🔽
              </div>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={FadeUp}>
            <span style={{ fontSize: '28px', fontWeight: 'bold' }}>
              How to use Flavoice? 🧐
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <div
              style={{
                fontSize: '20px',
                marginBottom: '25px',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              1. Record your voice with the recorder.🔊
            </div>
            <div
              style={{
                fontSize: '13px',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              (The song is good,and the high notes you can make are good.)
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <Animator animation={ZoomInScrollOut}>
            <div
              style={{
                fontSize: '20px',
                marginBottom: '25px',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              2. Check your song🎤
            </div>
            <div
              style={{
                fontSize: '15px',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Check out the songs that fit my range
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage page={4}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: '35px' }}>
              <Animator>If you are ready 👍</Animator>
              <div style={{ marginBottom: '30px' }}></div>
              <Animator>Enjoy Flavoice 🙋🏻‍♀️</Animator>
              <div style={{ marginBottom: '30px' }}></div>
              <Animator>Thank you 💛</Animator>
              <div style={{ marginBottom: '30px' }}></div>
              <Animator>
                <Link to="/">
                  <Button
                    content={'GO'}
                    width={'200'}
                    height={'40'}
                    fontSize="10px"
                  ></Button>
                </Link>
              </Animator>
            </span>
          </div>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
};

export default GuidePresenter;
