import { render } from '@testing-library/react'
import DRButton from '../index'

describe('<DRButton />', () => {
  it('should render and match the snapshot', () => {
    const onClick = () => {
      console.log('test')
    }
    const { baseElement } = render(
      <DRButton label='Create Post' style={{ margin: 16 }} onClick={onClick} />
    )
    expect(baseElement).toMatchSnapshot()
  })

  it('should contain 1 Button component', () => {
    const { getAllByTestId } = render(
      <DRButton label='Create Post' style={{ margin: 16 }} />
    )
    expect(getAllByTestId('button').length).toBe(1)
  })
})
