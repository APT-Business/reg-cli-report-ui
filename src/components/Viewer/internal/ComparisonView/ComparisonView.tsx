import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import CSSTransition from 'react-transition-group/CSSTransition';
import SwitchTransition from 'react-transition-group/SwitchTransition';
import { Space, Color, Shadow, Duration, Easing, FontSize } from '../../../../styles/variables';
import { ChoiceGroup } from '../../../ChoiceGroup';
import { Slider } from '../../../Slider';
import { Switch } from '../../../Switch';
import { RegEntity } from '../../../../types/reg';
import { Image } from '../../../Image';
import { OPEN_DELAY } from '../../constants';
import { Diff } from './Diff';
import { TwoUp } from './TwoUp';
import { Blend } from './Blend';
import { Slide } from './Slide';
import { Toggle } from './Toggle';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
`;

const ComparisonImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

const ComparisonImageInnerV = styled.div`
  margin: auto ${Space * 5}px;
  width: 100%;
`;

const ComparisonImageInnerH = styled.div`
  position: relative;
  margin: ${Space * 3}px auto;
`;

const ComparisonMode = styled.div`
  position: absolute;
  bottom: ${Space * 5}px;
  left: 50%;
  z-index: 10;
  max-width: 100%;
  width: 480px;
  padding: 0 ${Space * 1}px;
  transform: translate(-50%, 0);
  transition-property: opacity, transform;
  transition-timing-function: ${Easing.STANDARD};

  .viewer-enter & {
    opacity: 0;
    transform: translate(-50%, 20px);
    transition-duration: ${Duration.LARGE_IN}ms;
    transition-delay: ${OPEN_DELAY}ms;
  }

  .viewer-enter-active & {
    opacity: 1;
    transform: translate(-50%, 0);
  }
`;

const ControlWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 100%;
  left: 0;
  padding: 0 ${Space * 1}px ${Space * 2}px;
`;

const Control = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: ${Space * 1}px ${Space * 4}px;
  border-radius: 20px;
  background: ${Color.WHITE};
  box-shadow: ${Shadow.LEVEL1};
  transition-property: opacity, transform;
  transition-timing-function: ${Easing.STANDARD};

  .control-enter & {
    opacity: 0;
    transform: translateY(3px);
  }

  .control-enter-active & {
    opacity: 1;
    transform: translateY(0);
    transition-duration: ${Duration.FADE_IN}ms;
  }

  .control-exit & {
    opacity: 1;
    transform: translateY(0);
  }

  .control-exit-active & {
    opacity: 0;
    transform: translateY(3px);
    transition-duration: ${Duration.FADE_OUT}ms;
  }

  & > span:first-child,
  & > span:last-child {
    font-size: ${FontSize.SMALL};
    font-weight: bold;
  }
`;

const ControlSlider = styled.span`
  flex: 1 0 auto;
  padding: 0 ${Space * 2}px;
`;

export type Props = {
  entity: RegEntity;
};

export const ComparisonView: React.FC<Props> = ({ entity }) => {
  const [mode, setMode] = useState('slide');
  const [blendValue, setBlendValue] = useState(0.5);
  const [toggleValue, setToggleValue] = useState(false);

  const handleBlendChange = useCallback((value: number) => {
    setBlendValue(value);
  }, []);

  const handleToggleChange = useCallback(() => {
    setToggleValue(!toggleValue);
  }, [toggleValue]);

  const handleModeChange = useCallback((value: string) => {
    setMode(value);
  }, []);

  return (
    <Wrapper>
      <ComparisonImage>
        <ComparisonImageInnerV>
          <ComparisonImageInnerH>
            {entity.variant === 'changed' && (
              <>
                {mode === 'diff' && <Diff src={entity.diff} />}
                {mode === 'slide' && <Slide before={entity.before} after={entity.after} />}
                {mode === '2up' && <TwoUp before={entity.before} after={entity.after} />}
                {mode === 'blend' && <Blend before={entity.before} after={entity.after} value={blendValue} />}
                {mode === 'toggle' && <Toggle before={entity.before} after={entity.after} checked={toggleValue} />}
              </>
            )}

            {(entity.variant === 'new' || entity.variant === 'passed') && <Image src={entity.after} />}

            {entity.variant === 'deleted' && <Image src={entity.before} />}
          </ComparisonImageInnerH>
        </ComparisonImageInnerV>
      </ComparisonImage>

      {entity.variant === 'changed' && (
        <ComparisonMode>
          <SwitchTransition>
            <CSSTransition
              key={mode}
              classNames="control"
              timeout={{
                enter: Duration.FADE_IN,
                exit: Duration.FADE_OUT,
              }}>
              <ControlWrapper>
                {mode === 'blend' && (
                  <Control>
                    <span>Before</span>
                    <ControlSlider>
                      <Slider min={0} max={1} step={0.01} value={blendValue} onChange={handleBlendChange} />
                    </ControlSlider>
                    <span>After</span>
                  </Control>
                )}

                {mode === 'toggle' && (
                  <Control>
                    <Switch
                      id="toggle-switch"
                      prepend="Before"
                      append="After"
                      checked={toggleValue}
                      onChange={handleToggleChange}
                    />
                  </Control>
                )}
              </ControlWrapper>
            </CSSTransition>
          </SwitchTransition>

          <ChoiceGroup
            options={[
              {
                value: 'diff',
                label: 'Diff',
              },
              {
                value: 'slide',
                label: 'Slide',
              },
              {
                value: '2up',
                label: '2up',
              },
              {
                value: 'blend',
                label: 'Blend',
              },
              {
                value: 'toggle',
                label: 'Toggle',
              },
            ]}
            value={mode}
            onChange={handleModeChange}
          />
        </ComparisonMode>
      )}
    </Wrapper>
  );
};
