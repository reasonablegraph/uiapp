<?php

/**
 * @file
 * template.php
 */

function graphspace_bs_preprocess_html(&$variables) {
    //drupal_add_css('http://fonts.googleapis.com/css?family=Open+Sans:400,300,600&subset=latin,greek', array('group' => CSS_THEME, 'weight' => '101', 'preprocess' => FALSE));
    //drupal_add_css('/_assets/bootstrap/bootstrap.css', array('group' => CSS_THEME, 'preprocess' => FALSE));
    drupal_add_css(drupal_get_path('theme', 'graphspace_bs') . '/css/style.css', array('group' => CSS_THEME, 'weight' => '99', 'preprocess' => FALSE));
    drupal_add_js('/_assets/vendor/bootstrap/js/bootstrap.min.js', 'external');
}

function graphspace_bs_form_contact_site_form_alter(&$form, $form_state) {
	$form['subject']['#access'] = FALSE;
}

function graphspace_bs_menu_tree(&$variables) {
	return '<ol class="menu nav">' . $variables['tree'] . '</ol>';
}

function graphspace_bs_menu_tree__primary(&$variables) {
	return '<ol class="menu nav navbar-nav">' . $variables['tree'] . '</ol>';
}

function graphspace_bs_menu_tree__secondary(&$variables) {
	return '<ol class="menu nav navbar-nav secondary">' . $variables['tree'] . '</ol>';
}


function graphspace_bs_menu_tree__menu_staff_menu($variables) {
  return '<ol class="nav navbar nav-pills staffbar">' . $variables['tree'] . '</ol>';
}

function graphspace_bs_form_alter(&$form, &$form_state, $form_id) {
	if ($form_id == 'user_profile_form') {
		unset($form['contact']);
	}
}

function graphspace_bs_radio($variables) {
	$element = $variables['element'];
	$element['#attributes']['type'] = 'radio';
	element_set_attributes($element, array('id', 'name', '#return_value' => 'value'));

	if (isset($element['#return_value']) && $element['#value'] !== FALSE && $element['#value'] == $element['#return_value']) {
		$element['#attributes']['checked'] = 'checked';
	}
	_form_set_class($element, array('form-radio'));

	switch ($element['#title_display']) {
		// This *could* make sense e.g. in a table of mutually exclusive options...
		case 'attribute':
			$element['#attributes']['#title'] = $element['#description'];
			$output = '<input' . drupal_attributes($element['#attributes']) . ' />';
			break;
			// Bootstrap's default styles cause 'before' to render exactly like 'after':
		case 'before':
			$output = '<label class="radio">' . $element['#description'] . '<input' . drupal_attributes($element['#attributes']) . ' /></label>';
			break;
			// The 'invisible' option really makes no sense in the context of checkboxes
			// or radios, so just treat it like 'after':
		case 'invisible':
		case 'after':
		default:
			$radio = '<input' . drupal_attributes($element['#attributes']) . ' />';
			if (isset($element['#description'])) {
				$output = '<label class="radio"><span class="radiohlp">' . $element['#description'] . '</span>'  . $radio . '</label>';
			}
			else {
				$output = $radio;
			}
			break;
	}

	return $output;
} // bootstrap_radio()


function graphspace_bs_radios($variables) {
	// Redefine #children:
	$option_children = '';
	foreach ($variables['element']['#options'] as $key => $description) {
		$option_variables = array(
				'element' => $variables['element'][$key],
		);
		$option_variables['element']['#description'] = $option_variables['element']['#title'];
		$option_children .= theme('radio', $option_variables) . "\n";
	}
	$variables['element']['#children'] = $option_children;
	$element = $variables['element'];
	// Attributes usually figured out here, but serve no purpose here (?)
	return !empty($element['#children']) ? $element['#children'] : '';
	
} // bootstrap_radios()


