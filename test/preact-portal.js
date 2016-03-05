import { h, Component, render } from 'preact';
import Portal from '../src/preact-portal';

/*global sinon,expect*/

describe('preact-portal', () => {
	let scratch;

	before( () => {
		scratch = document.createElement('div');
		(document.body || document.documentElement).appendChild(scratch);
	});

	beforeEach( () => {
		scratch.innerHTML = '';
	});

	after( () => {
		scratch.parentNode.removeChild(scratch);
		scratch = null;
	});

	it('should have tests', () => {
		expect(Portal).to.be.a('function');
	});

	it('should render into target', () => {
		let foo = document.createElement('div');
		foo.setAttribute('id', 'foo');
		scratch.appendChild(foo);

		let base = document.createElement('div');
		scratch.appendChild(base);

		render(<Portal into="#foo"><div>hello</div></Portal>, base);

		expect(foo).to.have.property('innerHTML', '<div>hello</div>');
	});
});
