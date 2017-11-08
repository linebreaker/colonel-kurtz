/**
 * Embedded
 * A reuseable embedded content element. For usage, see the YouTube addon.
 */

const Field = require('./field')
const Frame = require('./frame')
const Graphic = require('./graphic')
const React = require('react')

class Embedded extends React.Component {

  static propTypes = {
    baseUrl: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    name: React.PropTypes.string.isRequired,
    resolveUrl: React.PropTypes.func,
    title: React.PropTypes.string
  }

  static defaultProps = {
      baseUrl: '',
      slug: '',
      title: 'Embedded Content',
      resolveUrl: (base, slug) => base + slug
  }

  getSrc() {
    const { baseUrl, resolveUrl, slug } = this.props

    return this.hasSlug() ? resolveUrl(baseUrl, slug) : null
  }

  hasSlug() {
    const { slug } = this.props

    return `${ slug == undefined ? '' : slug }`.trim().length > 0
  }

  render() {
    const { className, hint, name, slug, title } = this.props

    return (
      <div className={ className }>
        <Field ref={ (el) => this.field = el } hint={ hint } label={ title } value={ slug } name={ name } onChange={ this._onChange } />
        { this.props.children }
        <Frame ref={ (el) => this.frame = el } open={ this.hasSlug() }>
          <Graphic key={ slug } element="iframe" src={ this.getSrc(slug) } />
        </Frame>
      </div>
    )
  }

  _onChange = (e) => {
    this.props.onChange({
      [this.props.name]: e.currentTarget.value
    })
  }

}

module.exports = Embedded
