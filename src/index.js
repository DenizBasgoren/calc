import { Component } from 'preact'
import { useState } from 'preact/hooks'
import { produce } from 'immer'
import './style.css'

export default App

let sqrt = Math.sqrt
let c = 3e8
let gamma = u => sqrt( 1 - (u/c)**2 )

// if on web, expose gamma fn
if (typeof window !== 'undefined') {
	window.g = window.gamma = gamma
}

function App () {
	return <div>
			<h1>Special relativity quick calculator!</h1>
			<Eq
				imgSrc='formula/gamma.png'
				names={['u', 'gamma (1/lorentz factor)']}
				fns={[
					(u,g) => sqrt( c**2 * (1 - g**2) ),
					(u,g) => gamma(u),
				]}
			/>
			<Eq
				imgSrc='formula/doppler.png'
				names={['f_', 'f', 'u (not supported)']}
				fns={[
					(f_, f, u) => f  * sqrt( (1 - u/c) / (1 + u/c) ),
					(f_, f, u) => f_ * sqrt( (1 + u/c) / (1 - u/c) ),
					(f_, f, u) => NaN,
				]}
			/>
			<Eq
				imgSrc='formula/mom_energy.png'
				names={['E', 'm (not supported)', 'p (not supported)']}
				fns={[
					(e,m,p) => sqrt( (p*c)**2 + (m * c**2 )**2 ),
					(e,m,p) => NaN,
					(e,m,p) => NaN,
				]}
			/>
			<Eq
				imgSrc='formula/momentum.png'
				names={[]}
				fns={[
					
				]}
			/>
			<Eq
				imgSrc='formula/kinetic.png'
				names={[]}
				fns={[
					
				]}
			/>
			<Eq
				imgSrc='formula/rest_energy.png'
				names={['m','E']}
				fns={[
					(m,E) => E / c**2,
					(m,E) => m * c**2,
				]}
			/>
			<Eq
				imgSrc='formula/total_energy.png'
				names={[]}
				fns={[
					
				]}
			/>
			<Eq
				imgSrc='formula/length.png'
				names={['l', 'l0', 'u']}
				fns={[
					(l,l0,u) => l0 * gamma(u),
					(l,l0,u) => l / gamma(u),
					(l,l0,u) => sqrt( c**2 * (1 - (l/l0)**2)),
				]}
			/>
			<Eq
				imgSrc='formula/mass.png'
				names={['m_rel', 'm_rest (m)', 'v']}
				fns={[
					(m_rel,m_rest,v) => m_rest / gamma(v),
					(m_rel,m_rest,v) => m_rel * gamma(v),
					(m_rel,m_rest,v) => sqrt( c**2 * (1 - (m_rest/m_rel)**2)),
				]}
			/>
			<Eq
				imgSrc='formula/time.png'
				names={['t', 't0', 'u']}
				fns={[
					(t,t0,u) => t0 / gamma(u),
					(t,t0,u) => t * gamma(u),
					(t,t0,u) => sqrt( c**2 * (1 - (t0/t)**2)),
				]}
			/>
			<Eq
				imgSrc='formula/velocity.png'
				names={['v', 'v_ (not supported)', 'u (not supported)']}
				fns={[
					(v,v_,u) => (v_+u) / (1 + (v_/c)*(u/c) ),
					(v,v_,u) => NaN,
					(v,v_,u) => NaN,
				]}
			/>
			<Eq
				imgSrc='formula/lorentz_x.png'
				names={[]}
				fns={[
					
				]}
			/>
			<Eq
				imgSrc='formula/lorentz_t.png'
				names={[]}
				fns={[
					
				]}
			/>
			<Eq
				imgSrc='formula/lorentz_vx.png'
				names={[]}
				fns={[
					
				]}
			/>
			<Eq
				imgSrc='formula/lorentz_vy.png'
				names={[]}
				fns={[
					
				]}
			/>
		</div>
}


// names is an array of names of parameters like ['E','m','v']
// fns is an array of functions of signature (E,m,v) => {}.
//		eg. if names are ['E','m','v'], functions are
//			(_,m,v) => E
//			(E,_,v) => m
//			(E,m,_) => v
// all fns take not used parameters as well, to keep the signatures consistent
// once we find the index of the variable to calculate, fn at that index will be invoked,
// so that means if we have ['E','m','v'], to calculate E, fns[0] must be invoked
function Eq ({imgSrc, names, fns}) {

	// s holds array of contents of input elements.
	// initially it is an empty array of length of names.length == fns.length
	let [s,ss] = useState(names.map(n => undefined))

	// here we find out if we need to make a calculation.
	// calculation is made if length-1 inputs are full and 1 is empty
	let len = s.filter(o => o).length // length of names
	let ind = 0 // index of the empty one
	let res = 0 // value to be calculated for the empty variable
	let showRes = false // show the result?

	if (len == s.length - 1) {
		showRes = true
		for (let i = 0; i<s.length; i++) {
			if ( !s[i] ) {
				ind = i
				break
			}
		}
		res = fns?.[ind]?.( ...s ) // pass the states to the associated fn
	}

	return <div class='flexcont eq'>
		<div>
			<img src={imgSrc} />
		</div>
		{
			names.map((n,i) => <div class='field'>
				<p>{n}</p>
				<input type='text' onInput={onInput.bind(this, i)} />
				{
					i===ind && showRes && <p>
						{res}
					</p>
				}
			</div>)
		}
	</div>

	// on input, change the state of inputted values.
	// we use eval to change string to number, as well as to let
	// user write expressions like "0.5 * c", which will be converted to a number
	function onInput(i, e) {
		ss( produce( s => {
			try {
				s[i] = eval(e.target.value)
			}
			catch(er) {
				s[i] = undefined
			}
		}) )
	}
}